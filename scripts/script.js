// add
let add = function (x, y) {
  return +x + +y;
};

// subtract
let subtract = function (x, y) {
  return +x - +y;
};

// multiply
let multiply = function (x, y) {
  return +x * +y;
};

// divide
let divide = function (x, y) {
  return x / y;
};

// enter operation values, 2 numbers and operator
let operate = function () {
  let x = prompt("first number:");
  let y = prompt("second number:");
  let operator = prompt(
    "enter one of operator (add, subtract, multiply, divide):"
  );
  // result
  if (operator == "add") {
    let result = add(x, y);
    alert(`${x} + ${y} = ${result}`);
  }
  if (operator == "subtract") {
    let result = subtract(x, y);
    alert(`${x} - ${y} = ${result}`);
  }
  if (operator == "multiply") {
    let result = multiply(x, y);
    alert(`${x} * ${y} = ${result}`);
  }
  if (operator == "divide") {
    let result = divide(x, y);
    alert(`${x} / ${y} = ${result}`);
  }
  alert("Please enter correct values!");
};
console.log(operate());
