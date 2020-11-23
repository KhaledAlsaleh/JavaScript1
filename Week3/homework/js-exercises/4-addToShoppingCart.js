'use strict'

const shoppingCart = ["bananas" , "milk"];

function addToShoppingCart(groceryItem){

    shoppingCart.push(groceryItem);

    if(shoppingCart.length>3){

        shoppingCart.shift();
    }

    for(let i=0 ; i<shoppingCart.length ; i++){
            
        console.log(shoppingCart[i]);

    }

    return "You bought : " + shoppingCart[0] + ` , ${shoppingCart[1]} , ${shoppingCart[2]} !`; 
}

console.log(addToShoppingCart("chocolate"));
console.log(addToShoppingCart("waffles"));
console.log(addToShoppingCart("tea"));
