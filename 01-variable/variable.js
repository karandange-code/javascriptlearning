 console.log("hello")
 // let, const,var//
/* var:Variable can be re-declared & updated. A global scope variable.
let:Variable cannot be re-declared but can be updated. A block scope variable.
const: Variable cannot be re-declared or updated. A block scope variable.*/
 // data Types in js//
/* primitive types:Number, String, Boolean, Undefined, Null, BigInt, Symbol*/
 
let name = "Karan";
let age = 19;
let city = "Sambhajinagar";

console.log(name);
console.log(age);
console.log(city);

//LETS PRACTICE//
// 01-Create a const object called “product” to store information//
const product={
    title:"ball pen",
    rating:4,
    price:190,
};
console.log(product)


// 02-Create a const object called “profile” to store information//
 const profile={
    username:"@karandange",
    followers:421,
    isFollow:true,
 }
 console.log(profile);
 console.log(profile.username);
 console.log(profile.isFollow );
 profile.followers="490"
 console.log(profile.followers);


   
 

