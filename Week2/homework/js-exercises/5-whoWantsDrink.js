'use strict'

const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];


for(let i = 0; i <= 4;i++) {

    switch (i){
        case 0:
            drinkTray.push(drinkTypes[0]);
            break;
        case 1:
            drinkTray.push(drinkTypes[0]);
            break;
        case 2:
            drinkTray.push(drinkTypes[1]);
            break;
        case 3:
            drinkTray.push(drinkTypes[1]); 
            break;   
        case 4:
            drinkTray.push(drinkTypes[2]); 
            break;
        default:   
    }

 }
 console.log("Hey guys, I brought a",drinkTray[0],drinkTray[1],drinkTray[2],drinkTray[3],drinkTray[4]);


 // alternative way using if/else statement 

 /*

 if ( i === 0 || i === 1){
drinkTray.push(drinkTypes[0]);
} else if (i === 2 || i === 3){
drinkTray.push(drinkTypes[1]);
} else {
drinkTray.push(drinkTypes[2]);
}

*/