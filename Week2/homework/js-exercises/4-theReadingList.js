
'use strict'

const myBooks = [
    {
        title : "Beloved",
        author : "Toni Morrison",
        alreadyRead: true
    },
    {
        title : "one hundred years of solitude",
        author : "Gabriel García Márquez",
        alreadyRead: false
    },
    {
        title : "Invisible Man",
        author : "Ralph Ellison",
        alreadyRead: true
    }
]

//for (let i = 0; i<= 2; i++){
//    console.log(myBooks[i].title + " by " + myBooks[i].author)
// }

for(let i=0 ; i<=2 ; i++){
    console.log("Book "+ (i+1) +" Details: Name",myBooks[i].title,"& Author",myBooks[i].author);  // or console.log(myBooks[i].title + " by " + myBooks[i].author)
    if (myBooks[i].alreadyRead == true){

        console.log("You already read " + '"' +myBooks[i].title +'"');
        
    }else{

        console.log("you still need to read "+'"' + myBooks[i].title + '"');

    }
}


