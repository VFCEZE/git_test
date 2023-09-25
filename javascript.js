// Asi se crean los comentarios con "//" al inicio
/* Asi tambien se pueden crear comentarios multi lineas */

// VARIABLES 
/*  Se pueden crear usando "var", "let", o "const"
Preferentemente usar "let" o "const"
*/

// NUMBERS 
/*  */

let a = 10
console.log(a)
console.log(9 * a)

let b = 7 * a
console.log(b)

const max = 57 
const actual = max - 13
const percentage = actual / max
console.log(percentage)

//string

const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

/* In JavaScript, you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in. 
All of the following will work: */ 
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

/* Strings declared using backticks are a special kind of string called a template literal. 
In most ways, template literals are like normal strings, but they have some special properties: 
you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string:*/

const name = "Fran";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris" 

/* You can use the same technique to join together two variables: */
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

/* CONCATENATION
Joining strings together like this is called concatenation.
*/
const button = document.querySelector("button");

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

// Strings vs Numbers
const desk = "Front";
const number = 242;
console.log(`${desk}${number}`); // "Front 242"

/*The Number() function converts anything passed to it into a number, if it can. */
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

/* The String() function converts its argument to a string. */
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

//STRINGS LENGHT
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

// STRINGS CONDITIONALS
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

// Invoking functions
function myFunction() {
    console.log("hello");
  }
  
  myFunction();
  // calls the function once

//Optional parameters
/* Aca lo que cambia es que se especifica de donde tomar las strings. Las strings estan entre "" */

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

//PARAMETHERS AND ARGUNMENTS
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }
  console.log(favoriteAnimal('Dog'))

  //Actividad de THE ODIN PROJECT - JS FUNDAMENTALS PART3

  
var aleatorio = Math. random()
var aleatorio2 = Math. random()
console.log("Activdad de TOP _ JS part 3")
/*Write a function called add7 that takes one number and returns that number + 7.*/
  function add7() {

    return 7 + aleatorio;
  }
  console.log(aleatorio)
  console.log(add7())

  /*Write a function called multiply that takes 2 numbers and returns their product.*/
  console.log(aleatorio2)
  function multiply() {

    return aleatorio2 + aleatorio;
  }
  console.log(multiply())

  /*Write a function called capitalize that takes a string and returns that string with only the 
  first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.*/

 
  function capitalize(inputString) {      
        // Convert the input string to lowercase first
        const lowercasedString = inputString.toLowerCase();
      
        // Capitalize the first letter and concatenate it with the rest of the string
        return lowercasedString.charAt(0).toUpperCase() + lowercasedString.slice(1);
      }

      console.log(capitalize("HOLA"))
      console.log(capitalize("hola"))

    /*Write a function called lastLetter that takes a string and returns 
      the very last letter of that string:*/
  function lastLetter(inputString) {
      // Get the last character of the input string
      const lastIndex = inputString.length - 1;
      return inputString[lastIndex];
  }
  console.log(lastLetter("hola"))
  console.log(lastLetter("123456"))
  console.log()

  //FIZZ BUZZ Problem
  /* Actividad curso de The Odin project */
  /* PSeudocode
    When a user inputs a number
    Loop from 1 to the entered number
    If the current number is divisible by 3 then print "Fizz"
    If the current number is divisible by 5 then print "Buzz"
    If the current number is divisible by 3 and 5 then print "FizzBuzz"
    Otherwise print the current number */
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i = 1; i <= answer; i++) {
  if (i % 5 === 0 && i % 3 === 0) { //Aca lo que hacemos es indicar que si divido i por 3 y por 5, no hay numero restante se cumple la condicion para "fizzbuzz"
    console.log("FizzBuzz")
  }
  else if (i % 3 === 0) { //Aca lo que hacemos es indicar que si divido i por 3 y no hay numero restante se cumple la condicion para "fizz"
    console.log("Fizz")
  } 
  else if (i % 5 === 0) { //Aca lo que hacemos es indicar que si divido i por 5 y no hay numero restante se cumple la condicion para "buzz"
    console.log("Buzz")
  } 
  else {
  console.log(i)
}
/* We declare a variable i and assign it 1: the initial value of the variable i in our loop (NOTE: Most of the time, programmers find themselves looping from 0. 
  Due to the needs of our program, we’re starting from 1). The second clause, i <= answer is our condition. We want to loop until i is greater than answer. 
  The third clause, i++, tells our loop to increment i by 1 every iteration. 
  As a result, if the user inputs 10, this loop would print numbers 1 - 10 to the console.*/
}
/* Pusimos la condicion FizzBuzz arriba de todo para que funcione. The first condition now checks if i is divisible by 3 and 5 instead of checking 
if i is just divisible by 3. We’ve had to do this because if we kept it the way it was, it would run the first condition if (i % 3 === 0), so that if i was 
divisible by 3, it would print Fizz and then move on to the next number in the iteration, even if i was divisible by 5 as well. /*
