
'use strict'

let string1 = "This Is First String";
let string2 = "This Is Second String";

let myInfo ={ firstName : "Khaled", lastName : "Alsaleh", age : 29 };
let myCar = { color : "Black", brand : "BMW", isElectrical : false };

function typeChecker (arg1 , arg2){

    if (typeof arg1 === typeof arg2){

        console.log("Same Type!")

    }else {

        console.log("NOT The Same Type!")

    }

}

typeChecker(string1 , string2);
typeChecker(string1 , myInfo );
typeChecker(string1 , myCar  );
typeChecker(string2 , string1);
typeChecker(string2 , myInfo );
typeChecker(string2 , myCar  );

console.log(typeof string1);
console.log(typeof myInfo );