// *Variables*
// Declare a variable, assign it a value, and alert the value
let myVar = "Hola";
// alert(myVar);
// Create a variable, divide it by 10, and console log the value
let myNum = 25;
let finalNum = myNum / 10;
console.log(finalNum);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiply3Nums(num1, num2, num3) {
  alert(num1 * num2 * num3);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function myFunc(num1, num2, num3, num4) {
  console.log(num1 + num2 - num3 - num4);
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function mySecondFunc(num1, num2, num3) {
  let finalNum = 100 + num1 - num2;
  finalNum /= num3;
  if (finalNum > 25) {
    console.log("WE HAVE A WINNNA");
  }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function myThirdFunc(day) {
  let dayUpdate = day.toLowerCase();
  switch (true) {
    case dayUpdate == "saturday" || dayUpdate == "sunday":
      alert("weekend");
      break;
    case dayUpdate == "monday" ||
      dayUpdate == "tuesday" ||
      dayUpdate == "wednesday" ||
      dayUpdate == "thursday" ||
      dayUpdate == "friday":
      alert("weekday");
      break;
    default:
      alert("try again!");
      break;
  }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
