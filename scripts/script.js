const no_btns = document.querySelectorAll(".no");
const oper_btn = document.querySelectorAll(".oper");
const display_txt = document.querySelector("#display-txt");
const divide_btn = document.querySelector(".divide");
const equal_btn = document.querySelector(".equal");
const history1 = document.querySelector(".hi-1");
// console.log(history1.textContent);

// console.log(oper_btn);

let display_value = [];
let disp_val = 0;
let btn_value = 0;
let firstValue = "";
let secondValue = "";
let operValue = null;
let result = "";

// console.log("first:", firstValue, "second:", secondValue);
// let i = 0;

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
  return +x / +y;
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
    display_value.push(button.textContent);
    display_txt.textContent = display_value.join("");
  });
});

// read operators
oper_btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstValue == "") {
      operValue = button.textContent;
      firstValue = display_txt.textContent;
      // display_txt.textContent = "";
      display_value = [];
      history1.textContent = firstValue + button.textContent;
      console.log(firstValue);
    } else if (secondValue == "") {
      secondValue = display_txt.textContent;
      console.log(secondValue);
    }
  });
});
