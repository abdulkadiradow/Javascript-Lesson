//built inn functions


function addNumbers(number1, number2) {
  var addition = number1 + number2;
  return addition;
}

var result1 = addNumbers(10, 3);
var result2 = addNumbers(2, 8);

console.log(result1);
console.log(result2);

var person = {
  name: "Jamila"
}
console.log(Object.values(person));
console.log(Object.keys(person));
console.log("Jamila".toUpperCase());
console.log("Jamila".toLowerCase());
console.log("Jamila".indexOf("i"))