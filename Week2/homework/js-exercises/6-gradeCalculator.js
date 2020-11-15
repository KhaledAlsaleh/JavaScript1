'use strict'
// This function has two arguments your grade and the top grade 

function gradeCalculator(yourGrade,maxGrade){

    // Calculate percentage for yourGrade 
    let percentage = (yourGrade/maxGrade) * 100;
    // We used switch statement to check all cases A,B,C,D,E,F and exception input!
    switch(true){
        case percentage >= 90:
            return "You got a A (" + percentage + " %)!";
            break;
        case percentage >= 80:
            return "You got a B (" + percentage + " %)!";
            break;
        case percentage >= 70:
            return "You got a C (" + percentage + " %)!";
            break;
        case percentage >= 60:
            return "You got a D (" + percentage + " %)!";
            break;
        case percentage >= 50:
            return "You got a E (" + percentage + " %)!";
            break;
        case percentage >= 0:
            return "You got a F (" + percentage + " %)!"; // or return "You got a F (${percentage}%)";
            break;
        default:
            return "Please Enter A Valid Grade!";
            break;
    }
}
console.log(gradeCalculator(100,100));  // 100 %
console.log(gradeCalculator(96,100));   //  96 %
console.log(gradeCalculator(88,100));   //  88 %
console.log(gradeCalculator(75,100));   //  75 %
console.log(gradeCalculator(60,100));   //  60 %
console.log(gradeCalculator(50,100));   //  50 %
console.log(gradeCalculator(44,100));   //  44 % 
console.log(gradeCalculator(5,100));    //   5 %
console.log(gradeCalculator(0,100));    //   0 %
console.log(gradeCalculator(-1,100));   //   Please Enter A Valid Grade!
console.log(gradeCalculator(8.3,10));   //  83 %
console.log(gradeCalculator(4.7,10));   //  47 % 
console.log(gradeCalculator(3,20));     //  15 %


