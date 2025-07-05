// 📌 Callback Function
// A callback function is a function that is passed as an argument to another function and is called inside that function to complete some action.
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

// A function greet is defined with two parameters:

// name – a string

// callback – a function (which will be passed as an argument)

greet("Rahul", function () {
  console.log("Welcome to class!");
});
// You are calling the greet() function and:

// Passing "Rahul" as the first argument

// Passing an anonymous function (without name) as the second argument (this is the callback function)



console.log("------------------------------------------")

// JavaScript Method Overriding (Not Overloading)
function abc(a, b, c) {
  console.log(a, b, c);
}
abc(1, 2); // c = undefined
abc(1, 2, 3, 4); // extra args ignored


console.log("------------------------------------------")


//Default Argument
function DefArgument(a = 5, b = 3 * 2) {
  console.log(a * b);
}
DefArgument();     // 5 * 6 = 30
DefArgument(3);    // 3 * 6 = 18
DefArgument(2, 5); // 2 * 5 = 10


console.log("------------------------------------------")

// Procedural vs Callback (Dynamic Functions)
function add(a, b) { return a + b; } // Directly returns the sum of a and b
function subtract(a, b) { return a - b; } // Directly returns the difference

function calculator(a, b, operation) { 
// operation is a function passed as argument
  return operation(a, b); // Calls the passed function with a and b
}

// Passing the add function as the operation
let ans = calculator(3, 4, add); // equivalent to add(3, 4)
console.log(ans); // 7


console.log("------------------------------------------")

// Arrow Function and Closures
let answer = calculator(3, 4, (c, d) => {
  return c + d;
});
console.log(answer);
//When using arrow functions as callbacks, make sure the parameters inside the arrow (c, d) match the arguments passed (a, b) in the calculator function.
// Arrow function passed to calculator = callback