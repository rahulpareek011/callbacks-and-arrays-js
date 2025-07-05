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