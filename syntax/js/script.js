// How to create variables:
var a;
let b;

// How to use variables:
a = 5;
b = 6;
let z = a + b;

console.log(a);
console.log(b);
console.log(z);

// JS Numbers
document.getElementById("demo1").innerHTML = 10.50;
document.getElementById("demo2").innerHTML = 1001;

// JS Strings
document.getElementById("demo3").innerHTML = 'John Doe';
document.getElementById("demo4").innerHTML = "John Doe";

// JS Variables
let x;
x = 6;
document.getElementById("demo5").innerHTML = x;

// JS Operators
document.getElementById("demo6").innerHTML = (5 + 6) * 10;

// JS Assigning Values
let number1, number2;
number1 = 5;
number2 = 6;
document.getElementById("demo7").innerHTML = number1 + number2;

// JS Expressions
document.getElementById("demo8").innerHTML = 5 * 10;
number = 5;
document.getElementById("demo9").innerHTML = number * 10;
document.getElementById("demo10").innerHTML = "John" + " "  + "Doe";

// JS Keywords
let number01, number02;
number01 = 5 + 6;
number02 = number01 * 10;
document.getElementById("demo11").innerHTML = number02;

// JS Comments
let number0 = 5;   // I will be executed
// number0 = 6;   I will NOT be executed 
document.getElementById("demo12").innerHTML = number0;

// JS is Case Sensitive
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
document.getElementById("demo13").innerHTML = lastName;
