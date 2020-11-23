'use strict'

const numChildren  = [1,2,3,4,5];
const partnerNames = ["Dua lipa" , "Rihanna" , "Amy" , "Deny" , "Reme"];
const locations    = ["Utrecht" , "Amsterdam" , "Vienna" , "Cologne" , "Dubai"];
const jobs         = ["Software Developer" , "Cloud Engineer" , "Full Stack Developer" , "Front End Developer" , "Test Engineer"];

function tellFortune(numChildren,partnerNames,locations,jobs){

    const randomNumChild    = numChildren[Math.floor(Math.random()*numChildren.length)];
    const randomPartnerName = partnerNames[Math.floor(Math.random()*partnerNames.length)];
    const randomLocation    = locations[Math.floor(Math.random()*locations.length)];
    const randomJob         = jobs[Math.floor(Math.random()*jobs.length)];

    return "You Will Be a " + randomJob + " in " + randomLocation + " , Married To " + randomPartnerName + " With " + randomNumChild + " Kids!.";

}

console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));
console.log(tellFortune(numChildren,partnerNames,locations,jobs));