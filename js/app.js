const calcScreen = document.querySelector(".screen");
const calcHistory = document.querySelector(".calcHistory");

function showAdvanceCalc() {
  buttons.forEach((button) => {
    if (button.classList.contains("hidden")) {
      button.classList.remove("hidden");
      button.classList.add("unhidden");
    } else if (button.classList.contains("unhidden")) {
      button.classList.remove("unhidden");
      button.classList.add("hidden");
    }
  });
}
function deleteFromScreen() {
  const onScreen = readOnScreen();
  const lastChar = onScreen[onScreen.length - 1];
  if (isNumber(lastChar)) {
    calcScreen.textContent = onScreen.slice(0, -1);
  } else {
    let wordIndex = onScreen.length - 1;
    for (let index = onScreen.length; index >= 0; index--) {
      if (isNumber(onScreen[index])) {
        wordIndex = index;
        break;
      }
    }
    calcScreen.textContent = onScreen.slice(0, wordIndex + 1);
  }
}
function clearScreen() {
  calcScreen.textContent = "";
}
function clearHistoryScreen() {
  calcHistory.textContent = "";
}
function writeOnScreen(target) {
  calcScreen.textContent += target;
}
function writeOnHistoryScreen(target) {
  calcHistory.textContent = target;
}
function readOnScreen() {
  return calcScreen.textContent;
}
function readOnHistoryScreen() {
  return calcHistory.textContent;
}
function isOperator(string) {
  return /[!×÷+\-%^a-z]+\s?/.test(string);
}
const getKeyByValue = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

function whatEquation(string) {
  const groups = 6;
  const matches = string.match(
    /([0-9]+\.?[0-9]*)(.){1}([0-9]+\.?[0-9]*)|([a-z]+|!)\s?([0-9]+\.?[0-9]*)/
  );
  if (matches) {
    let equation = { operator: "", numbers: [] };
    for (let group = 1; group < groups; group++) {
      if (!matches[group]) continue;
      if (isNumber(matches[group])) {
        equation.numbers.push(matches[group]);
      } else {
        const operator = getKeyByValue(operators, matches[group]);
        if (!operator) {
          return { type: "constant", value: matches[group] };
        }
        equation.operator = operator;
      }
    }
    return { type: "operator", value: equation };
  }
  return null;
}

function whatConstants(constant) {
  return constant in constants
    ? { type: "constant", value: constants[constant] }
    : undefined;
}

function caculator(target) {
  const onScreen = readOnScreen();
  const onHistoryScreen = readOnHistoryScreen();

  // typing on the screen numbers and operators [if only not '=' operator]
  if (
    target.type === "number" ||
    (target.type === "operator" &&
      target.value !== "=" &&
      !isOperator(onScreen)) ||
    (target.value === "." && !onScreen.includes("."))
  )
    writeOnScreen(target.value);

  // calculating what on screen
  if (target.value === "=") {
    try {
      const newCalculations = isOperator(onScreen[0])
        ? onHistoryScreen + onScreen
        : onScreen;
      const equation = whatEquation(newCalculations);
      const result = calculation(equation);
      writeOnHistoryScreen(result);
      clearScreen();
    } catch (error) {
      console.log(error.message);
    }
  }

  if (target.type === "constant") {
    const constant = whatConstants(target.value);
    const result = calculation(constant);
    writeOnScreen(result);
  }

  // show Advance Calculator screen
  if (target.value === "SAC") {
    showAdvanceCalc();
    const btns_div = document.querySelectorAll(".btns-layout div");
    const powerIcon = document.querySelector(".power-icon");
    if (!powerIcon.classList.contains("hidden")) {
      btns_div.forEach((div) => {
        div.style.gridTemplateColumns = "repeat(5, 1fr)";
      });
    } else {
      btns_div.forEach((div) => {
        div.style.gridTemplateColumns = "repeat(4, 1fr)";
      });
    }
  }

  // clear All Screen
  if (target.value === "CE") {
    clearScreen();
    clearHistoryScreen();
  }
  // delete from the Screen
  if (target.value === "cls") {
    deleteFromScreen();
  }
}
