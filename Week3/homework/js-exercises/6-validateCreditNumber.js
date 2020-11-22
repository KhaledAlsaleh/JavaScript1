'use strict'

// I Will Cover All condition in one function as The exercise mention!!

function validateCreditNumber(creditCardNumber){

    
    let creditCardStatus;

    // first condition [ Input must be 16 characters ]:

    if(creditCardNumber.length !== 16){
        creditCardStatus = "Invalid Card Number! HINT: Your Credit Card Number " + creditCardNumber + " Must Be 16 Characters!";
        return creditCardStatus;
    }

    // Second condition [ All characters must be numbers ]:
    /*
        another way using Regular Expression:

        let creditCardNumber = "1234567890123456";
        let checkChar = /[^0-9]/g;     // we are looking for a character out of this rang [0-9] that means is not a number {^ this refer to not}
        let result = creditCardNumber.search(checkChar);  // .search method return position of first character not a number (start counting from zero)
        console.log(result);     // if the result -1 that means the character that we are looking for is not existing
        if (result !== -1 ){ 
            console.log("the card is not valid " + creditCardNumber);
        }else{
            console.log("the card is valid " + creditCardNumber);
        }

        or:

        let creditCardNumber = "==.1x111A2345zz678901293456";
        let checkChar = /[^0-9]/g;     // we are looking for a character out of this rang [0-9] that means is not a number {^ this refer to not}
        let result = creditCardNumber.match(checkChar); // .match return array of characters out of this range [0-9]
        console.log(result);     // if the result equal null that means the creditCardNumber has only numbers.
        if (result !== null ){ 
            console.log("the card is not valid " + creditCardNumber);
        }else{
            console.log("the card is valid " + creditCardNumber);
        } 

    */

    /*
    I Used 2 Number Methods:
    .parseInt  : the input is string or character and the output is number 
    .isInteger : the input is character and the output is boolean {true or false}
    if any symbol in the string is not an integer then the creditCardNumber is not valid 
    */

    for(let i=0; i<creditCardNumber.length; i++){

        let currentNumber = creditCardNumber[i];
        currentNumber = Number.parseInt(currentNumber);
        if(!Number.isInteger(currentNumber)){
            creditCardStatus = "Invalid! The Input " + creditCardNumber + " Should Contain Only Numbers!";
            return creditCardStatus;
        }
    }

    // Third Condition [ At least two different numbers should be represented ]:

    /*

    To check if 2 consecutive items is same value or not ! but it's not useful because we need at least 2 Different Types Of Numbers

    if(i !== creditCardNumber.length-1 && creditCardNumber[i]===creditCardNumber[i+1]){
            creditCardStatus = "Invalid! The input " + creditCardNumber + " Should Contain At Least 2 Different Types Of Numbers!";
    }   

    To Check if all numbers are not the same ! but it's not useful because we need at least 2 Different Types Of Numbers

    for(let i=0; i<creditCardNumber.length; i++){
        for(let j=0; j<=i; j++){
           if(creditCardNumber[i]===creditCardNumber[j]){
               creditCardStatus = "Invalid! The input " + creditCardNumber + " Should Contain At Least 2 Different Numbers!";        
           } 
        }
    }
    */

    /* I am sure there is way to solve it using (Regular Expression-Quantifiers) I will try with that later :D   .... 


    /*
    I will create an object to store the key for every item (character) in creditCardNumber.
    Then give values for every item {I don't care about the values it can be any value}.
    Using .keys to return a all unique keys {without unique}.
    Then if length of these keys is smaller than 2 then the creditCardNumber is not valid , because we have less than 2 different numbers
    */
    
   let creditCardObject = {};

   for(let i = 0; i < creditCardNumber.length; i++){

     creditCardObject[creditCardNumber[i]] = NaN; // I don't care about the value, it could be any value..
     
   }

   if(Object.keys(creditCardObject).length < 2){

    creditCardStatus = "Invalid! The Input " + creditCardNumber + " Should Contain At Least 2 Different Numbers!"; 
    return creditCardStatus;

   }

   // Fourth condition [ The Last Number Must Be Even ]:

   /*
    If the final digit has index [creditCardNumber.length - 1] in creditCardNumber is divisible by 2 {with 0 remainder} then it it even...
   */

  if(creditCardNumber[creditCardNumber.length - 1] % 2 !== 0){

    creditCardStatus = "Invalid! The Input " + creditCardNumber + " Should Not Contain Odd Number At The End!"; 
    return creditCardStatus;

  }

  // Fifth Condition [ The Sum Of All The Numbers Must Be Greater Than 16 ]:

  
  let sumOfAllNumbers = 0;
  for(var i = 0; i < creditCardNumber.length; i++){

    sumOfAllNumbers += Number(creditCardNumber[i]);

  }


  if(sumOfAllNumbers <= 16){

    creditCardStatus = "Invalid! The Input " + creditCardNumber + " Must Be Greater Than 16!"; 
    return creditCardStatus;

  }

creditCardStatus = "Success! The Input " + creditCardNumber + " Is A Valid Credit Card Number!";
return creditCardStatus;
}

console.log(validateCreditNumber('1111111111111116'));
console.log(validateCreditNumber('a92332119c011112')); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
console.log(validateCreditNumber('4444444444444444')); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
console.log(validateCreditNumber('6666666666661666'));
console.log(validateCreditNumber('a92332119c011112'));
console.log(validateCreditNumber('1111111111111110'));
console.log(validateCreditNumber('6666666666666661'));
console.log(validateCreditNumber('663451'));
