'use strict'

const cartForParty = {
    beers : 5,
    chips : 3.99,
    cola  : 4.99,
    wine  : 7.4,
    cake  : 1.99
 }

 function calculateTotalPrice(cartForParty){
    let totalPrice = 0;
    for (const key in cartForParty) {
        if (cartForParty.hasOwnProperty(key)) {

            totalPrice += cartForParty[key];   
       }
    }
    return "Total Price Is : " + totalPrice;

 }

 console.log(calculateTotalPrice(cartForParty));
 