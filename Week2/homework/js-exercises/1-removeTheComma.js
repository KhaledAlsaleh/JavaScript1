'use strict'

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log("The Length Of My String Is: " + myString.length);
myString = myString.replace(/,/g , " ");
//myString = myString.split(",").join(" ");
console.log(myString);

/* 

To remove first comma we use myString = myString.replace(",", " ");
and the output of this line will be: hello this,is,a,difficult,to,read,sentence.

To remove all commas in a string we use myString = myString.replace(/,/g , " ");
so here all commas in "global" will deleted.

Another way to remove commas using: myString = myString.split(",").join(" ");
so here first split the string on the commas (this will return array of string) and then use .join(" ") 
and put space between words as we passed to join function. 

*/