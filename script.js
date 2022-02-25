class Calculator {
  constructor(num1 = 0, op = "", num2 = 0) {
    this.num1 = num1;
    this.op = op;
    this.num2 = num2;
  }
  get result() {
    switch (this.op) {
      case "x":
        return this.num1 * this.num2;
      case "/":
        return this.num1 / this.num2;
      case "+":
        return this.num1 + this.num2;
      case "-":
        return this.num1 - this.num2;
      case "%":
        return this.num1 * 100;
      case "ln":
        return Math.log(this.num1);
      case "log":
        return Math.log10(this.num1);
      case "sin":
        return Math.sin(this.num1);
      case "cos":
        return Math.cos(this.num1);
      case "tan":
        return Math.tan(this.num1);
      case "^":
        return Math.pow(this.num1, this.num2);
      case "factorial":
        return factorial(this.num1);
      case "invert":
        return 1 / this.num1;
      case "pi":
        return Math.PI;
      case "e":
        return Math.exp(1);
    }
  }
}
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}
function unlockAll() {
  var btnsContainerClasses =
    document.querySelector(".btns-container").classList;
  if (btnsContainerClasses.contains("unlocked"))
    btnsContainerClasses.remove("unlocked");
  else btnsContainerClasses.add("unlocked");
  var btnsClasses = document.querySelectorAll(".btns");
  for (var i = 0; i < btnsClasses.length; i++) {
    if (btnsClasses[i].classList.contains("hide")) {
      btnsClasses[i].classList.remove("hide");
      btnsClasses[i].classList.add("unhide");
    } else if (btnsClasses[i].classList.contains("unhide")) {
      btnsClasses[i].classList.remove("unhide");
      btnsClasses[i].classList.add("hide");
    }
  }
}
function clearScreen() {
  screen.innerHTML = "";
}
function clearAll() {
  screen.innerHTML = "";
  calcHistory.innerHTML = "";
}
function number(btn) {
  if (btn != "." || dotIndex == -1) screen.innerHTML += btn;
  dotIndex = screen.innerHTML.toString().indexOf(".");
}

function symbol(btn) {
  if (btn === "=") {
    calculator.num2 = parseFloat(screen.innerHTML);
    clearAll();
    screen.innerHTML = calculator.result;
  } else {
    calculator.num1 = parseFloat(screen.innerHTML);
    calculator.op = btn;
    clearScreen();
    if (btn === "%" || btn === "ln" || btn === "log" || btn === "sin" 
    || btn === "cos" || btn === "tan" || btn === "factorial" || btn === "invert"
    || btn === "pi" || btn === "e") {
      screen.innerHTML = calculator.result;
    }
    calcHistory.innerHTML = calculator.num1 + " " + calculator.op;
  }
}
var screen = document.querySelector(".screen");
var calcHistory = document.querySelector(".calcHistory");
let calculator = new Calculator();
var dotIndex = -1;
