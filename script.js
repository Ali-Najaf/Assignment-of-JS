// 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = +prompt("Enter 1st number");
let num2 = +prompt("Enter 2nd number");
if(num1 > num2){
    console.log(num1);
} else if(num2 > num1){
    console.log(num2);
}
else{
    console.log(num1 + " = " + num2);
}

// 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

let num = +prompt("Enter the number");
if(num > 0){
    alert("The number is positive");
}else if(num < 0){
    alert("The number is nagative");
}else{
    alert("The number is neither positive nor negative");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let firstNum = +prompt("Enter first number");
let secondNum = +prompt("Enter second number");
let thirdNum = +prompt("Enter third number");
let fourthNum = +prompt("Enter fourth number");
let fifthNum = +prompt("Enter fifth number");

 let largestNum = firstNum;

if(secondNum > largestNum){largestNum = secondNum};
if(thirdNum > largestNum){largestNum = thirdNum};
if(fourthNum > largestNum){largestNum = fourthNum};
if(fifthNum > largestNum){largestNum = fifthNum};
console.log(largestNum);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

for(i = 0; i <= 15; i++){
    if(i % 2 == 0){
        document.write(i + " is even");
        document.write('<br>');
    } else {
        document.write(i + " is odd");
        document.write('<br>');
    }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range   Grade
// <60       F
// <70       D
// <80       C
// <90       B
// <100      A


let sub1 = +prompt("Enter subject 1's number");
let sub2 = +prompt("Enter subject 2's number");
let sub3 = +prompt("Enter subject 3's number");
let sub4 = +prompt("Enter subject 4's number");
let sub5 = +prompt("Enter subject 5's number");
let sub6 = +prompt("Enter subject 6's number");
let totalNum =+prompt("What are the total numbers?");

let obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;

let average = obtainedMarks / totalMarks * 100;

if (average <= 60) {
    document.write("Your Grade is F and " + " Your average is " + average + "%");
}
if (average <= 70 && average > 60) {
    document.write("Your Grade is D and " + " Your average is " + average + "%");
}
if (average <= 80 && average > 70) {
    document.write("Your Grade is C and "  + " Your average is " + average + "%");
}
if (average <= 90 && average > 80) {
   document.write("Your Grade is B and "  + " Your average is " + average + "%");
}
if (average <= 100 && average > 90) {
    document.write("Your Grade is A and "  + " Your average is " + average + "%");
}

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz");
        document.write('<br>');
    }
    else if (i % 3 === 0) {
        document.write("Fizz");
        document.write('<br>');
    }
    else if (i % 5 === 0) {
        document.write("Buzz");
        document.write('<br>');
    }
    else {
        document.write(i);
        document.write('<br>');
    }
} 

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (i = 1; i <= 1; i++) {
    document.write("*");
    document.write('<br>');
    for (i = 1; i <= 2; i++) {
        document.write("*");
    }
    document.write('<br>');
    for (i = 1; i <= 3; i++) {
        document.write("*");
    }
    document.write('<br>');
    for (i = 1; i <= 4; i++) {
        document.write("*");
    }
    document.write('<br>');
    for (i = 1; i <= 5; i++) {
        document.write("*");
    }
    document.write('<br>');
} 
