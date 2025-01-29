import { cart, removeFromCart } from '../data/cart.js';
import { products } from '../data/product.js';
import { hello } from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { deliveryOptions } from '../data/deliveryOptions.js';
//Calculating delivery date

hello()
const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));

let cartSummartHTML = '';

cart.forEach((cartItem) => {  //Looping and generating the html

  //getting the productId out of the cartItem
  const productId = cartItem.productId;

  let matchingItem;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingItem = product;
    }
  });

  cartSummartHTML = cartSummartHTML + `
        <div class="cart-item-container  
        js-cart-item-container-${matchingItem.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.Image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingItem.name}
                </div>
                <div class="product-price">
                  $${(matchingItem.priceCent / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link"
                      data-product-id="${matchingItem.id}">
                    Delete 
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                 </div>
                ${deliveryOptionHTML(matchingItem)}
              
            
              </div>
            </div>
        </div>
    `;
});

function deliveryOptionHTML(matchingItem) {
  let deliveryDateHTML = '';

  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    const priceString = deliveryOption.pricecents === 0
      ? 'Free'
      : `$${(deliveryOption.pricecents / 100).toFixed(2)} `;

    deliveryDateHTML = deliveryDateHTML + ` 
     <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} - Shipping
                    </div>
                  </div>
                </div>
                `
  });

  return deliveryDateHTML;
}

document.querySelector('.js-order-summary').innerHTML = cartSummartHTML;

//to remove an item from the cart first we give the delete
//element a class, so as to add an eventListener 103
document.querySelectorAll('.js-delete-link')
  .forEach((link) => { //looping through all the links
    link.addEventListener('click', () => {

      //when the delete button is click this should happen
      // Remove the product from the cart
      //update the HTML
      //to know d items to delete we attach the productID to the 
      //delete element dataset-product-id="${}"
      const productId = link.dataset.productId;
      removeFromCart(productId);

      //Using the DOM to get the element you want to remove
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`);
      container.remove();
    });
  });