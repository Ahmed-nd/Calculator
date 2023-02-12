

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

