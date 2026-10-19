 
// JAVASCRIPT DOM MANIPULATION - COMPLETE NOTES
 


// ==========================================
// 1. THE 3 MUSKETEERS OF WEB DEVELOPMENT
// ==========================================

// HTML = Structure
// CSS = Style
// JavaScript = Logic


 
// 2. WINDOW OBJECT
 

 

// Example:

console.log(window);

console.log(window.innerWidth);
console.log(window.innerHeight);

// Alert example:
 window.alert("Hello JavaScript");

 
// 3. DOCUMENT OBJECT MODEL (DOM)
  

// DOM ka full form Document Object Model hai.

 

console.log(document);

 
// 4. SELECTING ELEMENTS
 


// A. SELECTING WITH ID
// getElementById() ek element return . 
let heading = document.getElementById("heading");

console.log(heading);


// B. SELECTING WITH CLASS
// getElementsByClassName() HTMLCollection return .

let paragraphs = document.getElementsByClassName("para");

console.log(paragraphs);


// C. SELECTING WITH TAG
// getElementsByTagName() HTMLCollection return .  

let allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);


// D. querySelector()
 

// ID selector: "#heading"
// Class selector: ".para"
// Tag selector: "p"

let firstParagraph = document.querySelector(".para");

console.log(firstParagraph);


// E. querySelectorAll()
 

let allBoxes = document.querySelectorAll(".box");

console.log(allBoxes);


 
// 5. DOM PROPERTIES
 

 

let myHeading = document.getElementById("myHeading");

console.log(myHeading.tagName);

console.log(myHeading.innerText);

console.log(myHeading.innerHTML);

console.log(myHeading.textContent);


// Changing heading text

myHeading.innerText = "Hello JavaScript";

// Appending text to existing text

myHeading.innerText += " from karan ";


 
// 6. ACCESSING ALL THREE BOXES
 

 
 

let boxes = document.querySelectorAll(".box");

boxes[0].innerText = "First Box";
boxes[1].innerText = "Second Box";
boxes[2].innerText = "Third Box";


 

boxes.forEach(function (box) {
    box.style.color = "green";
});


 
// 7. ATTRIBUTES
 

// getAttribute()  
// setAttribute() 

let para = document.getElementById("myPara");

console.log(para.getAttribute("id"));

console.log(para.getAttribute("class"));

// Setting a title attribute

para.setAttribute("title", "My paragraph");

 
// 8. STYLE MANIPULATION
 

// node.style = inline CSS change  

para.style.color = "blue";

para.style.backgroundColor = "lightyellow";

para.style.fontSize = "20px";

para.style.padding = "10px";


// CSS background-color -> JavaScript backgroundColor
// CSS font-size -> JavaScript fontSize


 
// 9. CREATING NEW ELEMENTS
 

  

let newDiv = document.createElement("div");

newDiv.innerText = "I am a new div";

newDiv.style.backgroundColor = "lightgreen";

newDiv.style.padding = "10px";


// ==========================================
// 10. INSERTING ELEMENTS
// ==========================================

// append() = //adds at the end of node (inside)
// prepend() = //adds at the start of node (inside)
// before() =  //adds before the node (outside)
// after() =  //adds after the node (outside)

// Example: newDiv ko body ke end mein add karna

document.body.append(newDiv);

 

  document.body.prepend(newDiv);

  para.before(newDiv);

  para.after(newDiv);

 
// 11. DELETING ELEMENTS
 

// remove() element ko DOM se remove karta hai.

// Example:
// newDiv.remove();

 


 

 
// 13. HOMEWORK QUESTION 1
 

// Create an H2 with text:
// Hello JavaScript from karan

let homeworkHeading = document.createElement("h2");

homeworkHeading.innerText = "Hello JavaScript";

homeworkHeading.innerText += " karan";

document.body.append(homeworkHeading);


 


 
// 15. HOMEWORK QUESTION 2
 

// Create a button with text "Click Me".
// Background red, text white.
// Insert it as the first element inside body.

let button = document.createElement("button");

button.innerText = "Click Me";

button.style.backgroundColor = "red";

button.style.color = "white";

button.style.padding = "10px 20px";

button.style.border = "none";

document.body.prepend(button);


 

 

console.log("DOM Manipulation notes completed!");
