const num_btns = document.querySelectorAll(".no");
const oper_btn = document.querySelectorAll(".oper");
const display_txt = document.querySelector("#display-txt");
const divide_btn = document.querySelector(".divide");
const equal_btn = document.querySelector(".equal");
const clear_btn = document.querySelector(".clear-btn");
const del_btn = document.querySelector(".del-btn");
const dot_btn = document.querySelector(".dot-btn");
const second_display_txt = document.querySelector(".hi-1");

let first_value = "";
let second_value = "";
let oper_value = null;
let resetScreen = false;

let delSymbol = () => {
  display_txt.textContent = display_txt.textContent.slice(0, -1);
  if (display_txt.textContent == "") {
  }
};

let clearAll = () => {
  display_txt.textContent = "0";
  second_display_txt.textContent = "";
  first_value = "";
  second_value = "";
  oper_value = null;
};

let resetApp = () => {
  display_txt.textContent = "";
  resetScreen = false;
};

let addDot = () => {
  if (display_txt.textContent.includes(".")) {
    dot_btn.disable = true;
  } else display_txt.textContent += ".";
};

dot_btn.addEventListener("click", () => {
  addDot();
});

del_btn.addEventListener("click", () => {
  delSymbol();
});

clear_btn.addEventListener("click", () => {
  clearAll();
});

equal_btn.addEventListener("click", () => {
  evaluate();
});

// number buttons (0-9)
num_btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (display_txt.textContent === "0" || resetScreen) {
      resetApp();
    }
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
  if (display_txt.textContent === "0" || resetScreen) {
    resetApp();
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
  second_display_txt.textContent = `${first_value} ${oper_value}`;
  resetScreen = true;
};

// count 2 numbers with operator
let evaluate = () => {
  if (oper_value === null || resetScreen) {
    return;
  }
  second_value = display_txt.textContent;
  if (
    first_value === "0" ||
    (display_txt.textContent === "0" && oper_value === "÷")
  ) {
    display_txt.textContent = "can't divide by 0!";
    setTimeout(clearAll, 1333);
  } else {
    second_value = display_txt.textContent;
    display_txt.textContent = roundNumber(
      operate(oper_value, first_value, second_value)
    );
    second_display_txt.textContent = `${first_value} ${oper_value} ${second_value} =`;
    oper_value = null;
  }
};

let roundNumber = (number) => {
  return Math.round(number * 10000) / 10000;
};

// keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    joinNumbers(e.key);
  }
  if (e.key === ".") {
    addDot();
  }
  if (e.key === "=" || e.key === "Enter") {
    evaluate();
  }
  if (e.key === "Backspace") {
    delSymbol();
  }
  if (e.key === "Escape") {
    resetApp();
  }
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    selectOperator(convertOperator(e.key));
  }
});

let convertOperator = (keyVal) => {
  if (keyVal === "/") {
    return "÷";
  }
  if (keyVal === "*") {
    return "×";
  }
  if (keyVal === "-") {
    return "-";
  }
  if (keyVal === "+") {
    return "+";
  }
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
    case "×":
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
