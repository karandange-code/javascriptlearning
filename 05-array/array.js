
console.log("DAY 5: JAVASCRIPT ARRAYS");
console.log("=========================");

 
// 1. WHAT IS AN ARRAY?
 

// An array stores multiple values in one variable.

let heroes = ["Ironman", "Hulk", "Thor", "Batman"];

console.log("Heroes:", heroes);

let marks = [96, 75, 48, 83, 66];

console.log("Student Marks:", marks);

let info = ["Rahul", 86, "Delhi"];

console.log("Student Info:", info);


 
// 2. ARRAY INDICES
 

// Array indexing starts from 0.

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);
console.log("Fourth fruit:", fruits[3]);

// Access the last element using length.

console.log("Last fruit:", fruits[fruits.length - 1]);

// Change an array element.

fruits[1] = "Grapes";

console.log("Updated fruits:", fruits);


 
// 3. LOOPING OVER AN ARRAY
 

// Using a for loop.

let numbers = [10, 20, 30, 40, 50];

console.log("Using for loop:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// Using a for...of loop.

console.log("Using for...of loop:");

for (let number of numbers) {
    console.log(number);
}

 
// 4. PRACTICE: AVERAGE CLASS MARKS
 

// Marks: [85, 97, 44, 37, 76, 60]

let studentMarks = [85, 97, 44, 37, 76, 60];

let total = 0;

for (let mark of studentMarks) {
    total = total + mark;
}

let average = total / studentMarks.length;

console.log("Total Marks:", total);
console.log("Number of Students:", studentMarks.length);
console.log("Average Marks:", average);


 
// 5. PRACTICE: 10% DISCOUNT ON PRICES
 

// Original prices of five items.

let prices = [250, 645, 300, 900, 50];

console.log("Original Prices:", prices);

for (let i = 0; i < prices.length; i++) {
    let discount = prices[i] * 0.10;
    prices[i] = prices[i] - discount;
}

console.log("Prices After 10% Discount:", prices);


 
// 6. PUSH() METHOD
 

// push() adds an element at the end.

let vegetables = ["Potato", "Tomato"];

vegetables.push("Onion");

console.log("After push:", vegetables);

// We can add multiple elements.

vegetables.push("Carrot", "Cabbage");

console.log("After adding more:", vegetables);


 
// 7. POP() METHOD
 

// pop() removes and returns the last element.

let colors = ["Red", "Green", "Blue"];

let removedColor = colors.pop();

console.log("Removed Color:", removedColor);
console.log("After pop:", colors);

 
// 8. TOSTRING() METHOD
 

// toString() converts array values into a string.

let languages = ["JavaScript", "Python", "Java"];

console.log("Array:", languages);
console.log("As String:", languages.toString());

 
// 9. CONCAT() METHOD
 

// concat() joins arrays and returns a new array.

let boys = ["Rahul", "Amit"];
let girls = ["Priya", "Sneha"];

let students = boys.concat(girls);

console.log("Boys:", boys);
console.log("Girls:", girls);
console.log("Combined Students:", students);

 
// 10. UNSHIFT() METHOD
 

// unshift() adds an element at the beginning.

let animals = ["Dog", "Cat"];

animals.unshift("Lion");

console.log("After unshift:", animals);


 
// 11. SHIFT() METHOD
 
// shift() removes and returns the first element.

let cities = ["Mumbai", "Pune", "Delhi"];

let removedCity = cities.shift();

console.log("Removed City:", removedCity);
console.log("After shift:", cities);

 
// 12. SLICE() METHOD
 

// slice(startIndex, endIndex)
// The endIndex is excluded.
// slice() does not change the original array.

let subjects = ["Maths", "English", "Science", "History"];

let selectedSubjects = subjects.slice(1, 3);

console.log("Original Subjects:", subjects);
console.log("Selected Subjects:", selectedSubjects);

 
// 13. SPLICE() METHOD
 

// splice(startIndex, deleteCount, newElements...)
// splice() changes the original array.

let games = ["Cricket", "Football", "Hockey", "Tennis"];

// Remove one element starting at index 1.

games.splice(1, 1);

console.log("After removing:", games);


// Add an element at index 1 without deleting anything.

games.splice(1, 0, "Badminton");

console.log("After adding:", games);


// Replace one element at index 2.

games.splice(2, 1, "Basketball");

console.log("After replacing:", games);


 
// 14. CLASS NOTES: COMPANY ARRAY PRACTICE
 

let companies = [
    "Bloomberg",
    "Microsoft",
    "Uber",
    "Google",
    "IBM",
    "Netflix"
];

console.log("Original Companies:", companies);


// A. Remove the first company.

companies.shift();

console.log("After removing first company:", companies);


// B. Remove Uber and add Ola in its place.

let uberIndex = companies.indexOf("Uber");

if (uberIndex !== -1) {
    companies.splice(uberIndex, 1, "Ola");
}

console.log("After replacing Uber with Ola:", companies);


// C. Add Amazon at the end.

companies.push("Amazon");

console.log("Final Companies:", companies);


 
