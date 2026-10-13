 
 // JAVASCRIPT STRINGS - NOTES
 

// String is a sequence of characters used to represent text.

// 1. CREATE A STRING

let str = "karan";
console.log(str);


// 2. STRING LENGTH
// .length 

console.log(str.length);  


// 3. STRING INDICES
// Index  start from 0 .

console.log(str[0]); // k
console.log(str[1]); // a
console.log(str[2]); // r

 
// 4. TEMPLATE LITERALS
 

 
 

let name = "Karan";
let age = 19;

console.log(`My name is ${name} and I am ${age} years old.`);

console.log(`Sum = ${10 + 20}`);

 
// 5. STRING METHODS
 

// toUpperCase(): Capital letters

let text = "javascript";

console.log(text.toUpperCase()); // JAVASCRIPT


// toLowerCase(): Small letters

let capitalText = "HELLO WORLD";

console.log(capitalText.toLowerCase()); // hello world


// trim(): removing space.

let message = "   Hello Karan   ";

console.log(message.trim()); // Hello Karan

 
// 6. CONCATENATION
 

//join two string.

let str1 = "Hello";
let str2 = " World";

console.log(str1.concat(str2)); // Hello World

console.log(str1 + str2); // Hello World

 
// 7. REPLACE AND REPLACEALL
 

// replace(): 

let sentence = "Hello Karan";

console.log(sentence.replace("Karan", "Developer"));

// replaceAll():  

let fruit = "apple apple apple";

console.log(fruit.replaceAll("apple", "mango"));


 
// 8. CHARAT
 

 

let language = "JavaScript";

console.log(language.charAt(0)); // J
console.log(language.charAt(4)); // S

 
// 9. SLICE
 

// slice(start, end)
// End index include nahi hota.

let word = "JavaScript";

console.log(word.slice(0, 4)); // Java
console.log(word.slice(4, 10)); // Script
 


 
//   PRACTICE
 

//  Start username with @, followed by their full name and ending with the fullname length.
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.

let fullName =  prompt("enter fullname  ")
let cleanName = fullName.replaceAll(" ", "");
let username = "@" + cleanName + cleanName.length;

console.log(username); //  
 