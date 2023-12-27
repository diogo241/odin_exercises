/*
******************************************************
Handling text — strings in JavaScript
******************************************************
*/

const string = "The revolution will not be televised";
console.log(string);

const badString = string;
console.log(badString);

const name = "Diogo";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you";
const joined = `${one}${two}`;
console.log(joined);

Retorna o comprimento de uma string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

Replacing String Content
The replace() method replaces only the first match
let texto = "Please visit Microsoft and Microsoft!";
let newTexto = text.replace("Microsoft", "W3Schools");
By default, the replace() method is case sensitive
To replace case insensitive, use a regular expression with an /i flag (insensitive):
let texts = "Please visit Microsoft!";
let newTexts = text.replace(/MICROSOFT/i, "W3Schools");

JavaScript String ReplaceAll()
text = text.replaceAll("Cats", "Dogs");

let inicialText = "Olá Diogo";
let inicialTextUppercase = inicialText.toUpperCase();
console.log(inicialTextUppercase);






/*
******************************************************
Comparisons
******************************************************
*/

Boolean Value
For boolean values, true becomes 1 and false becomes 0.

let test1 = 5 > 4; //true
let test2 = "apple" > "pineapple"; //false
let test3 = "2" > "12"; //true
let test4 = undefined == null; //true
let test5 = undefined === null; //false
let test6 = null == "\n0\n"; //false
let test7 = null === +"\n0\n"; //false







/*
******************************************************
Logical Operators
******************************************************
*/
 ||     OR
 &&     AND
 !      NOT

result = a || b; //basta um ser true que retorna true

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false:
if (1 || 0) {
    alert( 'truthy!' );
  }

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed."); // it is the weekend
}
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


&&
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. 
The difference is that AND returns the first falsy value while OR returns the first truthy one.


------------Precedence of AND && is higher than OR ||


! (NOT)
The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.

alert( !true ); // false

A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false


let userName = prompt("Who's there?", "");

if (userName === "Admin"){
    let password = prompt("Password?","");

    if (password === "TheMaster"){
        alert("Welcome");
    } else if (password === '' || password === "Canceled"){
        alert("Canceled");
    } else {
        alert("Wrong Password");
    }

} else if (userName === '' || userName === null ) {
    prompt("I don't know you");
} else {
    prompt("Canceled");
}





/*
******************************************************
Ternary operator
******************************************************
*/

condition ? run this code : run this code instead

const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";



  let days = 31;
  if (choice === "February") {
    days = 28;
  } else if (
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days = 30;
  }


let jsName = prompt("What is the “official” name of JavaScript?","");

jsName === "ECMAScript" ? alert("Right") : alert("You don’t know? ECMAScript!");


let number = prompt("Choose a number",'');

(number > 0) ? alert(1):
(number < 0) ? alert(-1):
alert(0);



let result = (a + b < 4) ? result = "Below" : result = "Over";




let message = (login == 'Employee') ? message = "Hello":
(login == 'Director') ? message = 'Greetings':
(login == '') ? message = 'No login':
message = '';
