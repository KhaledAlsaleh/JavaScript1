'use strict'

function giveCompliment(myName){

    const compliments = [ "are awesome" , "are great" , "are supersmart" , "are gift to those around you" ,
                          "have impeccable manners" , "have the best laugh" , "are strong" , "are making a difference" , 
                          "should be proud of yourself" , "are really courageous" ];

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
    return "You " + randomCompliment + " " + myName + "!";
}

console.log(giveCompliment("Khaled"));
console.log(giveCompliment("Khaled"));
console.log(giveCompliment("Khaled"));
console.log(giveCompliment("Khaled"));

