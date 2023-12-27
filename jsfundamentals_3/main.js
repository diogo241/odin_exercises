/*
******************************************************
FUNCTIONS
******************************************************
*/
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))








/*
------
Local Variables
------
*/
// A variable inside an fuction is only visble inside that function
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert( message );
}
showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local to the function
/*
------
Outer variables
------
*/
let user = 'John';

function showMessage() {
  let message = 'Hello, ' + user;
  alert(message);
}
showMessage(); // Hello, John


/* If a same-named variable is declared inside the function then it shadows the outer one.
For instance, in the code below the function uses the local userName. 
The outer one is ignored:*/
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable








/*
------
Parameters
------
*/
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}







/*
------
Naming
------
*/
/*Functions are actions. So their name is usually a verb. 
It should be brief, as accurate as possible and describe what the function does, 
so that someone reading the code gets an indication of what the function does.
It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. 
There must be an agreement within the team on the meaning of the prefixes.
For instance, functions that start with "show" usually show something.*/

// Function starting with…
// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// Examples of such names:
// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false



