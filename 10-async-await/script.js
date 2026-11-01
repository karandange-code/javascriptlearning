
console.log("===== ASYNCHRONOUS JAVASCRIPT =====");

// 1. SYNCHRONOUS JAVASCRIPT

console.log("\n1. SYNCHRONOUS");

console.log("First");
console.log("Second");
console.log("Third");


// 2. ASYNCHRONOUS JAVASCRIPT

console.log("\n2. ASYNCHRONOUS");

console.log("Start");

setTimeout(() => {
    console.log("Timer completed");
}, 2000);

console.log("End");


// 3. CALLBACKS

console.log("\n3. CALLBACKS");

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finished() {
    console.log("Greeting completed");
}

greet("Karan", finished);


// 4. CALLBACK HELL

console.log("\n4. CALLBACK HELL");

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);


// 5. PROMISE

console.log("\n5. PROMISE");

let myPromise = new Promise((resolve, reject) => {
    console.log("Promise created");

    setTimeout(() => {
        resolve("Task completed successfully");
    }, 2000);
});


// 6. THEN AND CATCH

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// 7. REJECTED PROMISE

console.log("\n6. REJECTED PROMISE");

let failedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Task failed"));
    }, 3000);
});

failedPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Rejected:", error.message);
    });


// 8. ASYNC FUNCTION

console.log("\n7. ASYNC FUNCTION");

async function greetAsync() {
    return "Hello from async function";
}

greetAsync().then((result) => {
    console.log(result);
});


// 9. AWAIT

console.log("\n8. ASYNC AWAIT");

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Student data received");
        }, 2000);
    });
}

async function showData() {
    console.log("Fetching data...");

    let result = await getData();

    console.log(result);
    console.log("Data fetching completed");
}

showData();


// 10. TRY CATCH WITH ASYNC AWAIT

console.log("\n9. ERROR HANDLING");

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve("Congratulations! You passed");
        } else {
            reject(new Error("You failed. Keep practising"));
        }
    });
}

async function showResult() {
    try {
        let result = await checkMarks(75);
        console.log(result);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Result checking completed");
    }
}

showResult();


// 11. IIFE

console.log("\n10. IIFE");

(function () {
    console.log("IIFE runs immediately");
})();


// ARROW FUNCTION IIFE

(() => {
    console.log("Arrow IIFE runs immediately");
})();


 

 
