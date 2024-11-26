 export let cart = [{  // Checkout page
    productId: '26cf35b8-822c-414c-bd8c-f90d42d1bb28',
    quantity: 2,
 }, {
    productId: 'c40d0bc6-231c-4287-856f-e4f076c3c4d8',
    quantity: 1
 }];

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
          quantity: 1
        })
      }
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
  }
  