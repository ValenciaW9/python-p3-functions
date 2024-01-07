//function addAndLog(num1, num2) {
  //console.log(num1 + num2);
//}

//function addAndReturn(num1, num2) {
  ////return num1 + num2;
//}

//const sum1 = addAndLog(2, 2);
//const sum2 = addAndReturn(2, 2);



//function myFuunction(param) {
 // console.log("Running myFunction");
 //return param + 1;
//}


//const myGunctionReturnValue = myFunction();
// => "Running myFunction"
//console.log(myFunctionReturnValue);
// => 2

//function sayHi(name = "friend") {
   // console.log(`Hi there, ${name}!`);
//}
//function sayHi(name = "friend") {
  //console.log(`Hi there, ${name}!`);
//}

//sayHi();
// => "Hi there, friend!"
//sayHi("Sunny");
// => "Hi there, Sunny!"

/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetProgrammer();
  => "Hello, programmer!"
*/
   function greetProgrammer() {
    console.log("Hello, greetProgrammer!");
   }

/*
  You should be able to call this function with one argument and see its output in the terminal:
  greet("Naureen");
  => "Hello, Naureen!"
*/
function greet(name) {
  console.log(`Hello, ${name}!`);
}



/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetWithDefault();
  => "Hello, programmer!"

  You should also be able to call this function with one argument and see its output in the terminal:
  greetWithDefault("Sunny");
  => "Hello, Sunny!"
*/
 function greetWithDefault(name = "Sunny") {
  console.log(`Hello, ${name}!`);
 }

/*
  You should be able to call this function with two arguments and get back its return value:
  const sum = add(1, 2);
  console.log(sum);
  => 3
*/
function add(num1, num2) {
  return num1 + num2;
}

/*
  You should be able to call this function with two arguments and get back its return value:
  const result = halve(4);
  console.log(result);
  => 2

  If the function is called with an argument that isn't a number, it should return null:
  const result = halve("two")
  => null
*/
  // Function to halve a number
function halve(number) {
  if (typeof number !== "number") return null; // Return null if the input is not a number
  return number / 2; // Return the halved value of the number
}

// Function to greet a programmer
function greet_programmer(name = "programmer") {
  console.log(`Hello, ${name}!`); // Print a greeting message with the provided name or the default value
}

// Function to add two numbers
function add(num1, num2) {
  return num1 + num2; // Return the sum of the two numbers
}

// Function to greet with a provided name or use a default value
function greetWithDefault(name = "programmer") {
  console.log(`Hello, ${name}!`); // Print a greeting message with the provided name or the default value
}

// Call the functions and test them
greet_programmer(); // Output: Hello, programmer!
greet("Naureen"); // Output: Hello, Naureen!
greetWithDefault(); // Output: Hello, programmer!
greetWithDefault("Sunny"); // Output: Hello, Sunny!
const sum = add(1, 2);
console.log(sum); // Output: 3
const result = halve(4);
console.log(result); // Output: 2
const invalidResult = halve("two");
console.log(invalidResult); // Output: null