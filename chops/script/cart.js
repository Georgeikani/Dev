 export const cart = [{  // Checkout page
    productVendorName: '26cf35b8-822c-414c-bd8c-f90d42d1bb28',
    quantity: 2
 }, {
    productVendorName: 'c40d0bc6-231c-4287-856f-e4f076c3c4d8',
    quantity: 1
 }];

 export function addToCart(productVendorName) {
    let matchingItem = '';
  
          //Checking if the same product is already in the cart
      cart.forEach((item) => {
        if (productVendorName === item.productVendorName){
            matchingItem = item;
        }
      });
  
      //if the product is in the cart increase it by 1
      if(matchingItem){
        matchingItem.quantity += 1;
      }else{
        cart.push({  // adding product to cart
          productVendorName: productVendorName,
          quantity: 1
        })
      }
  }