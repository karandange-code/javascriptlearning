 
// ========================================
// JAVASCRIPT LOOPS - NOTES
// ========================================

// Loops are used to execute a piece of code
// again and again.

// 1. FOR LOOP
 

for (let i = 1; i <= 5; i++) {
    console.log("karan");
}

// practice question 
// 01- Print numbers from 1 to 20.
for(i=1;i<=20;i++){
    console.log(i)
}

// 02-Print numbers from 20 to 1.
for(i=20; i>=1; i--) {
    console.log(i)
}

// 03- Print the multiplication table of 7.
for(i=1; i<=10;i++){
    console.log("7x",i,"=" ,7*i)
}
 

//04- Print the squares of numbers from 1 to 10.

for(i=1;i<=10;i++){
    console.log(i , "=" ,i*i)
}

// while loop

let count=1;
while(count<=5){
    console.log(count);
    count++;
}
  

// practice question

// 01-  Print numbers from 1 to 10.
let number=1
while(number<=10){
    console.log(number);
    number++

}

//02- Print even numbers from 2 to 20.
let num=2;
while(num<=20){
    console.log(num);
    num+=2

}

//03-  Print numbers from 10 to 1.
let value=10
while(value>=1){
    console.log(value);
    value--
}

//04- Find the sum of numbers from 1 to 10.
let sum=0;
let no=1;
while(no<=10){
    sum+=no;
    no++
}
console.log("total sum=", sum )

// do while

let n=1;
do {
    console.log(n);
    n++
}
while(n<=10);


// 01- Print even numbers from 2 to 10.
evenNumber=2;
do{
    console.log(evenNumber);
    evenNumber+=2;
} while(evenNumber<=10);

// set numbers=10 and condition numbers<5,observe how many time code will run.
numbers=10;
do{
    console.log(numbers);
}while(numbers<5);



// for of loop

let str="karan"
for (let value of str){
    console.log(value);
}

 console.log(str.length);


 //practice question 
// 01- . Array [10, 20, 30, 40] pritn each value.
 
let array=[10,20,30,40];
for(let value of array){
    console.log(value);
}

// 02- Array [2, 4, 7, 9] ki sabhi values ka sum find karo

let Array=[2,4,7,9];
let totalsum = 0;
for(let value of Array){
    totalsum+=value;
}
console.log("totalsum",totalsum);

// for in loop

let student={
    name: "karan",
    age: 19,
    course:"javascript",
}
for (let key in student){
    console.log(key);
console.log(key,":",student[key]);
}

//Guessing game

/* 01- Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/

 
let gameNum = 9;

let userNum = Number(prompt("Guess the game number (1-10):"));

while (userNum !== gameNum) {
    userNum = Number(
        prompt("Incorrect number! Please try again:")
    );
}

console.log("You entered the correct number!");

 

 