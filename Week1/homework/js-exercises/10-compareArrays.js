'use strict'

const array1 = ["hello", 123, true, { name: "Khaled" }];
const array2 = ["This", "Is" , "Second", "Array", "Contain" , 7 , "Items"];

console.log('The Length Of Array 1 Is ' + array1.length);
console.log('The Length Of Array 2 Is ' + array2.length);

if (array1.length == array2.length){

    console.log('They are the same')

}else{

    console.log('Two Different Sizes')
}