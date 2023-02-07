const num_btns = document.querySelectorAll(".no");
const oper_btn = document.querySelectorAll(".oper");
const display_txt = document.querySelector("#display-txt");
const divide_btn = document.querySelector(".divide");
const equal_btn = document.querySelector(".equal");
const history1 = document.querySelector(".hi-1");

let first_value = "";
let second_value = "";
let oper_value = null;
// let shouldResetScreen = false;

let resetApp = () => {
  display_txt.textContent = "0";
};

equal_btn.addEventListener("click", () => {
  evaluate();
});

// number buttons (0-9)
num_btns.forEach((button) => {
  button.addEventListener("click", () => {
    // if (display_txt.textContent === "0") {
    //   resetApp();
    // }
    joinNumbers(button.textContent);
  });
});

// operator buttons (+ -...)
oper_btn.forEach((button) => {
  button.addEventListener("click", () => {
    selectOperator(button.textContent);
  });
});

// fill display with numbers that are pressed
let joinNumbers = (num_value) => {
  if (display_txt.textContent === "0") {
    // resetApp();
  }
  display_txt.textContent += num_value;
};

// get operator
let selectOperator = (operator) => {
  if (oper_value !== null) {
    evaluate();
  }
  first_value = display_txt.textContent;
  oper_value = operator;
  history1.textContent = `${first_value} ${oper_value}`;
  display_txt.textContent = "";
  // resetApp();
};

// count 2 numbers with operator
let evaluate = () => {
  if (oper_value === null) {
    return;
  }
  second_value = display_txt.textContent;
  display_txt.textContent = operate(oper_value, first_value, second_value);
  history1.textContent = `${first_value} ${oper_value} ${second_value} =`;
  oper_value = null;
  // console.log(second_value);
};

// operate depends on entered value by user
let operate = (operator, x, y) => {
  x = +x;
  y = +y;
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "÷":
      if (y === 0) return null;
      else return divide(x, y);
    default:
      return null;
  }
};
// add
let add = (x, y) => {
  return x + y;
};
// subtract
let subtract = (x, y) => {
  return x - y;
};
// multiply
let multiply = (x, y) => {
  return x * y;
};
// divide
let divide = (x, y) => {
  return +x / +y;
};
