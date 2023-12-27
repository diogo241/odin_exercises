/*
******************************************************
FUNCTIONS
******************************************************
*/

// b

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
function checkAge2(age) {
  return age > 18 || confirm("Did parents allow you?");
}

function compareNumbers(a, b) {
  return a < b ? a : b;
}
console.log(compareNumbers(5, 10));

// c
function pown(x, n) {
  let result = x;
  for (i = 0; i < n; i++) {
    result = x ** n;
  }
  return result;
}

console.log(pown(2, 2));

let g = prompt("x?", "");
let y = prompt("n?", "");

y < 1 ? `You can't use ${n}` : alert(pown(g, y));
