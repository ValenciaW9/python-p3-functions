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
   function halve(number) {
    if(typeof number!== "number") return null;
    return number /2;
  }

 greetProgrammer();
 greet("Naureen");
 greetWithDefault();
 greetWithDefault("Sunny");
 const sum = add(1,2);
 console.log(sum);
 const result = halve(4);
 console.lof(result);
 const invalideResult = halve("two");
 console.log(invalidResult);

//function sayhi(name) {
    //console.log(`Hi there, ${name}!`);
//}
  
///sayHi();