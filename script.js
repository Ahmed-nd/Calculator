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
    }
  }
}

function unlockAll() {
  console.log("later");
}
function clearScreen() {
  screen.innerHTML = "";
}
function clearAll() {
  screen.innerHTML = "";
  history.innerHTML = "";

}
function number(btn) {
  if (btn != "." || dotIndex == -1) screen.innerHTML += btn;
  dotIndex = screen.innerHTML.toString().indexOf(".");
}

function symbol(btn) {
  if (btn === "=") {
    calculator.num2 = parseFloat(screen.innerHTML);
    screen.innerHTML = calculator.result;
  } else {
    calculator.num1 = parseFloat(screen.innerHTML);
    calculator.op = btn;
    clearScreen();
    if (btn === "%") {
      screen.innerHTML = calculator.result;
    }
    history.innerHTML = calculator.num1.toString() + calculator.op;
  }
}
var screen = document.querySelector(".screen");
var history = document.querySelector(".history");
let calculator = new Calculator();
var dotIndex = -1;



// function number(btn) {
//     var numberOnScreen = parseFloat(screen.innerHTML);
//     dotIndex = numberOnScreen.toString().indexOf(".");
//     if (btn != ".") {
//       inputNumberOnScreen.push(btn);
//       if (!isFloat) {
//         dotIndex++;
//       }
//     } else {
//       isFloat = 1;
//     }

//     for (var i = 0; i < dotIndex; i++) {
//       numberOnScreen += inputNumberOnScreen[i] * Math.pow(10, dotIndex - i - 1);
//     }
//     var j = 1;
//     for (var i = dotIndex; i < inputNumberOnScreen.length; i++) {
//       numberOnScreen += inputNumberOnScreen[i] / Math.pow(10, j);
//       j++;
//     }
//     screen.innerHTML = currNumber = numberOnScreen;
//   }
