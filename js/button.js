const buttons = document.querySelectorAll("button");
// listen for click events on buttons
buttons.forEach((button) => {
  button.addEventListener("click", buttonHandler, false);
});
// identify the clicked button and send it to the caculator
function buttonHandler(event) {
  const button = event.target.value;
  try {
    caculator(whatIsIt(button));
  } catch (error) {
    console.log(error);
  }
}
// translate from human readable to caculator readable
const operators = {
  multiply: "×",
  divide: "÷",
  addaction: "+",
  substitution: "-",
  modulo: "%",
  invert: "1÷",
  power: "^",
  ln: "ln",
  log: "log",
  sin: "sin",
  cos: "cos",
  tan: "tan",
  factorial: "!"
};
const constants = {
  pi:'π',
  euler:'e'
}
// identify the button
function whatIsIt(target) {
  if (isNumber(target)) {
    return { type: "number", value: parseFloat(target) };
  } else if (target in operators) {
    return { type: "operator", value: operators[target] };
  } else if (target in constants) {
    return { type: "constant", value: target };
  } else {
    if (!target) throw new Error("Undefined button with value " + target);

    return { type: "regular", value: target };
  }
}
// check if the target is a number using regex
function isNumber(target) {
  // target is a number if it can be matched to a single digit
  return /[0-9]+/.test(target);
}

