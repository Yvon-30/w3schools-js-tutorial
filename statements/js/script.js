// JS Statements
let x, y, z;    // Declare 3 variables
x = 5;          // Assign the value 5 to x
y = 6;          // Assign the value 6 to y
z = x + y;      // Assign the sum of x and y to z
console.log(z);
document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";  

document.getElementById("demo01").innerHTML = "Hello Dolly."; 

// JS Semicolons
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo011").innerHTML = c;
 
// Multiple statements on one line
let number0, number1, number2;
number0 = 5; number1 = 6; number2 = number0 + number1;
document.getElementById("demo012").innerHTML = number2;

// JS White Space
let person = "Hege"; 
console.log(person);

let person2 ="Hege";
console.log(person2);

// JS Line Length and Line Breaks
document.getElementById("demo02").innerHTML =
"Hello Dolly!";

// JS Code Blocks
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }

