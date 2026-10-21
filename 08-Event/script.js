
/*
 
           JAVASCRIPT EVENTS - CLASS NOTES
 

1. EVENTS IN JAVASCRIPT
-----------------------
An event is an occurrence or action in the browser.

Examples:
- Mouse events: click, dblclick
- Keyboard events: keydown, keyup
- Form events: submit, input
- Other events: load, print

Events notify JavaScript when something happens.


2. EVENT HANDLING
 
Event handling means running code when an event occurs.

Syntax:

node.event = () => {
    // handle event here
};

Example:

btn.onclick = () => {
    console.log("Button was clicked");
};

Note:
addEventListener() is generally more flexible than
assigning an onclick property.


3. EVENT OBJECT
 
The event object contains information about an event.

Example:

btn.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
});

Important properties:
- e.target  : element where the event originated
- e.type    : type of event
- e.clientX : mouse X coordinate in viewport
- e.clientY : mouse Y coordinate in viewport


4. EVENT LISTENERS
 
Syntax:

node.addEventListener("click", callback);

It registers a function to run when an event occurs.

Removing a listener:

node.removeEventListener("click", callback);

IMPORTANT:
The same function reference must be used to remove
the listener. An identical new arrow function will
not remove the original listener.


5. DARK MODE / LIGHT MODE
 
We use:
- addEventListener()
- if...else
- classList.add()
- classList.remove()
- innerText
*/

 
// PRACTICAL 1: SELECT THE BUTTON
 

const btn = document.querySelector("#mode");

 
// PRACTICAL 2: EVENT HANDLING
 

/*
btn.onclick = () => {
    console.log("Button was clicked");
};
*/

 
// PRACTICAL 3: EVENT OBJECT
 

/*
btn.addEventListener("click", (e) => {
    console.log("Target:", e.target);
    console.log("Event type:", e.type);
    console.log("Mouse X:", e.clientX);
    console.log("Mouse Y:", e.clientY);
});
*/


//  
// PRACTICAL 4: ADD AND REMOVE LISTENER
// 

/*
function showMessage() {
    console.log("Button clicked!");
}

// Add listener
btn.addEventListener("click", showMessage);

// Remove the SAME listener
btn.removeEventListener("click", showMessage);
*/


  
// PRACTICAL 5: DARK MODE / LIGHT MODE TOGGLE
  

let currMode = "light";

btn.addEventListener("click", () => {

    if (currMode === "light") {

        // Switch to dark mode
        currMode = "dark";

        document.body.classList.add("dark");

        btn.innerText = "☀️ Enable Light Mode";

    } else {

        // Switch to light mode
        currMode = "light";

        document.body.classList.remove("dark");

        btn.innerText = "🌙 Enable Dark Mode";
    }

    console.log("Current mode:", currMode);
});
