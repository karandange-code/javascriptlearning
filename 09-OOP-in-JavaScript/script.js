
 
 
// 1. PROTOTYPES
 

const parent = {
    greet() {
        console.log("Hello from parent!");
    },

    show() {
        console.log("Parent method");
    }
};

const child = {
    name: "Karan",

    // Same-name method: object method shadows prototype method
    show() {
        console.log("Child method");
    }
};

// Set parent as child's prototype
Object.setPrototypeOf(child, parent);

console.log("1. PROTOTYPES");

child.greet(); // Inherited from parent
child.show();  // Child's own method is used

console.log(
    "Prototype:",
    Object.getPrototypeOf(child) === parent
);

 
// 2. CLASSES AND CONSTRUCTOR
 

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student(
    "Karan",
    "karan@example.com"
);

const student2 = new Student(
    "Rahul",
    "rahul@example.com"
);

console.log("\n2. CLASSES");

console.log(student1.name);
console.log(student2.email);

student1.study();


 
// 3. INHERITANCE
 

class Parent {
    showMessage() {
        console.log("Message from parent.");
    }
}

class Child extends Parent {
    showMessage() {
        console.log("Message from child.");
    }
}

const childObject = new Child();

console.log("\n3. METHOD OVERRIDING");

childObject.showMessage();


 
// 4. SUPER KEYWORD
 

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`User: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }

    showRole() {
        console.log("Regular user");
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    showRole() {
        super.showRole();
        console.log(`Admin role: ${this.role}`);
    }
}

const admin1 = new Admin(
    "Karan",
    "karan@example.com",
    "Administrator"
);

console.log("\n4. SUPER KEYWORD");

admin1.viewData();
admin1.showRole();


 
// 5. COLLEGE WEBSITE PRACTICE PROJECT
 

let websiteData = "Welcome to our college website!";

class WebsiteUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        return websiteData;
    }
}

class WebsiteAdmin extends WebsiteUser {
    editData(newData) {
        if (typeof newData !== "string" || !newData.trim()) {
            throw new Error("Website data cannot be empty.");
        }

        websiteData = newData;
    }
}

const user1 = new WebsiteUser(
    "Rahul",
    "rahul@example.com"
);

const websiteAdmin = new WebsiteAdmin(
    "Karan",
    "karan@example.com"
);
 
// 6. HTML DOM AND EVENT HANDLING
 

const websiteElement = document.querySelector("#website-data");
const outputElement = document.querySelector("#output");
const viewButton = document.querySelector("#view-button");
const editButton = document.querySelector("#edit-button");

function logMessage(message) {
    outputElement.textContent += `\n${message}`;
}

viewButton.addEventListener("click", () => {
    websiteElement.textContent = user1.viewData();

    outputElement.textContent =
        `User: ${user1.name}\n` +
        `Email: ${user1.email}\n` +
        `Website Data: ${user1.viewData()}`;
});

editButton.addEventListener("click", () => {
    try {
        websiteAdmin.editData("Admissions are now open!");

        websiteElement.textContent = websiteAdmin.viewData();

        outputElement.textContent =
            "Admin updated the website data successfully.\n" +
            `Updated Data: ${websiteAdmin.viewData()}`;
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
});

console.log("\n5. COLLEGE WEBSITE");

console.log(user1.viewData());

websiteAdmin.editData("Admissions are now open!");

console.log(websiteAdmin.viewData());


 
// 7. ERROR HANDLING: TRY-CATCH
 

console.log("\n6. ERROR HANDLING");

try {
    throw new Error("This is a sample error.");
} catch (error) {
    console.log("Error caught:", error.message);
}

console.log("Program continues after error handling.");
