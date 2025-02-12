 export let cart = JSON.parse(localStorage.getItem('cart'));
  
 if(!cart){
  cart =  [{  // Checkout page
    productId: '26cf35b8-822c-414c-bd8c-f90d42d1bb28',
    quantity: 2,
    deliveryOptionId: '1'
 }, {
    productId: 'c40d0bc6-231c-4287-856f-e4f076c3c4d8',
    quantity: 1,
    deliveryOptionId: '2' //adding delivery option ID to the cart
 }];
 };
 


 function saveToLocalStorage() { //saving item to cart
  localStorage.setItem('cart', JSON.stringify(cart));
 }

 export function addToCart(productId) {
    let matchingItem = '';
  
          //Checking if the same product is already in the cart
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId ){
            matchingItem = cartItem;
        }
      });
  
      //if the product is in the cart increase it by 1
      if(matchingItem){
        matchingItem.quantity += 1;
      }else{
        cart.push({  // adding product to cart
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1' //adding delivery option ID to cart
        })
      }

      saveToLocalStorage();
  }

// Steps to remove item from cart
// 1-create new array
// 2-loop through the cart
// 3-add each product  to new array, except for this productid
 export function removeFromCart(productId){ // deleting item from cart
        const newCart = []

        cart.forEach((cartItem) =>{
          if(cartItem.productId !== productId){ //33
            newCart.push(cartItem);
          }
        });

        cart = newCart;

        saveToLocalStorage();
  }
  
  // After setting up the delivery date we make it interractive by
  // Making the deliveryOption interactive
  // 1. update deliveryOptionId in the cart
  // 2. update the page to match the day we select
  // When we are updating a deliveryOption we need to know the 
  // product we are updating and deliveryOption we cho.
 export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem
    cart.forEach((cartItem) =>{
      if (productId === cartItem.productId){
        matchingItem =cartItem
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId

    saveToLocalStorage()
  }