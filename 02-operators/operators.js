console.log("DAY 2: OPERATORS:");
// Arithmetic Operators
let a = 9;  
 let b = 4 ;
console.log("a= ",a, "b= ", b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
 //Modulus 
 console.log("a%b=",a%b);
 //Exponentiation 
 console.log("a**b=",a**b);
 //Increament 
   //post increament 
 console.log("a++=",a++);
 console.log( "a=", a);
// pre increament 
console.log("++a=",++a);
//Decremnet//
console.log("--a=",--a);
//Assighnment  Operators 
 let value=5;
 console.log("value+=9 ",value+=9);
 console.log("value-=4",value-=4);
 console.log("value*=9",value*=9);
 console.log("value/=2", value/=2);
 console.log("value%=7",value%=7);
 console.log("value**=1",value**=1);
 //comparison opertaors  
 /*Equal to ==  , equal to &type ===
 not equal to !=  ,  not equal to &type  !==;*/
//>, >=, <, <=  
 let age=19; 
 console.log(age>18); // true 
 console.log(age<18); //false 
 console.log(age===19);
 console.log(age!==18);
 //Logical Operators  
 /* Logical AND &&
    Logical OR ||
    Logical NOT !     */
    

let boyage = 19;
let hasID = true;

console.log(boyage >= 18 && hasID);
// Output: true

console.log(boyage  >= 18 && false);
// Output: false
 

let hasCash = false;
let hasUPI = true;

console.log(hasCash || hasUPI);
// Output: true

console.log(false || false);
// Output: false





let isRaining = false;

console.log(!isRaining);
// Output: true

let isLoggedIn = true;

console.log(!isLoggedIn);
// Output: false

  
   /*  Conditional statements
  To implement some condition in the code*/

  // if-else statement

  let mode="dark";
  let color;
  if(mode==="dark"){
    color="black";
  }
else{
  color="white";
}

/*else-if statement*/
let girlage=19;
if(girlage<18){
  console.log("junior");
}
else if(girlage>60){
  console.log("senior");
}
else{
  console.log("middle");
}
  
  /*Ternary Operators
 condition ? true output : false output*/
 age>18 ? "adult" : "not adult";

/*  practice
1-Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.*/
let usernumber = prompt("Enter a number: ")
if(usernumber%5===0){
  console.log("number is multiple by 5");

}
else{
  console.log("num is not multiple by 5");
}
  

/*2-  Write a code which can give grades to students according to their scores:  


90-100, A
70-89, B
60-69, C
50-59, D
0-49, F      */
let marks=90;
let grade;

 if (marks<=100 && marks>=90){
  grade="A";
 }
 else if(marks<=89 && marks>=70){
  grade="B";
 }
 else if (marks<=69  && marks>=60 ){
  grade="C";
 }
 else if (marks<= 59  && marks>=50 ){
  grade="D";
 }
 else{
  grade="F";
 }
 console.log("Marks:", marks);
console.log("Grade:", grade);