//  function 
/*function functionName()
{ 

       code to perform task 
}
       function call
       functionName();*/

function greet() {
    console.log("hello karan");
}
greet();


// parameter and argument

function sumnumber(a, b) {
    console.log(a + b);
}

sumnumber(10, 19);
/* parameters= a,b
argument= 10,19*/

// return

function sumprint(a, b) {
    return a + b;
}
let result = sumprint(10, 19);
console.log(result);

// arrow function//
/* const fucntionNmae()=>{
    code
    }*/
const sumarrow = (a, b) => {
    return a + b;
}
let Result = sumarrow(19, 19);
console.log(Result);


/*practice question
01-Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("karan"));


 

// for each loop in array 
/* arr.forEach(value)=>{
   console.log(value);
   }*/
/*question
Qs. For a given array of numbers, print the square of each value using the forEach loop.*/


let arr = [2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val * val);
});

// map()
let Arr = [1, 2, 3, 4, 5];
let newArr = Arr.map((val) => {
    return val * 2;


});
console.log(newArr);

// filter() 

let num = [1, 2, 3, 4, 5];
let evenNumber = num.filter((val) => {
    return val % 2 === 0;
});
console.log(evenNumber);

let marks = [89, 90, 91, 70];
let topper = marks.filter((mark) => {
    return mark >= 90;
});
console.log(topper);


/*reduce


 arr.reduce((accumulator, currentValue) => {
    return updatedValue;
}, initialValue);*/


let number = [1, 2, 3, 4, 5];
let product = number.reduce((result, val) => {
    return result * val;
},1);
console.log(product);

/* practice question 
  Take a number n as input from user.create an array of number from 1 to n. use the reduce method to claculate sum of all numbers in the array.  */
  let n=5;
  let array=[];
  for (let i=1;i<=n; i++){
    array.push(i);
  }
 console.log("array",array);
 
  let totalsum =array.reduce((result,val)=>{
    return result+val;
  },0);
  console.log("totalsum",totalsum);


    

 



 



    
