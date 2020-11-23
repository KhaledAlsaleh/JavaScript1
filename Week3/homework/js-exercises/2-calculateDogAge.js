'use strict'

function calculateDogAge(humanYears){

    const dogYears = humanYears * 7;

    return "Your doggie is " + dogYears + " years old in dog years!" // or return `Your doggie is ${dogYears} years old in dog years!`;
    
}

console.log(calculateDogAge(3));
console.log(calculateDogAge(4));
console.log(calculateDogAge(5));
