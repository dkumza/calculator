const no_btns = document.querySelectorAll(".no");
const display_txt = document.querySelector("#display-txt");
const divide_btn = document.querySelector(".divide");
const equal_btn = document.querySelector(".equal");

let display_value = [];
let btn_value = 0;
let firstValue = 0;
let secondValue = 0;

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
  display_txt.textContent = x / y;
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
// console.log(operate());

// number buttons
no_btns.forEach((button) => {
  button.addEventListener("click", () => {
    btn_value = button.textContent;
    display_value.push(btn_value);
    display_txt.textContent = display_value.join("");
  });
});

// divide button
divide_btn.addEventListener("click", () => {
  btn_value = divide_btn.textContent;
  firstValue = display_value.join("");
  console.log(firstValue);
  display_value.push(btn_value);
  // firstValue = display_value.join("");
  // display_value = [];
  display_txt.textContent = display_value.join("");
});

// equal button
equal_btn.addEventListener("click", () => {
  secondValue = display_value.join("");
  divide(firstValue, secondValue);
  display_value = [];
});

// display txt
