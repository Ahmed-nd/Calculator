const multy = "\u00D7";
const minus = "\u2212";

function buttonHandler(event) {
  const button = event.target.value;
  try {
    addingLogic(whatIsIt(button));
  } catch (error) {
    console.log(error);
  }
}

function whatIsIt(target) {
  if (isNumber(target)) {
    return { type: "number", value: parseFloat(target) };
  } else if (isOperator(target)) {
    return { type: "operator", value: target };
  } else if (isConstant(target)) {
    return { type: "constant", value: target };
  } else {
    if (!target) throw new Error("Undefined button with value " + target);

    return { type: "regular", value: target };
  }
}

function isNumber(target) {
  const regex = new RegExp("^[0-9]$", "g");
  return regex.test(target);
}

function isOperator(target) {
  switch (target) {
    case multy:
    case "÷":
    case "+":
    case minus:
    case "=":
    case "%":
    case "ln":
    case "log":
    case "sin":
    case "cos":
    case "tan":
    case "^":
    case "factorial":
    case "invert":
      return true;
    default:
      return false;
  }
}
function isConstant(target) {
  switch (target) {
    case "pi":
    case "e":
      return true;
    default:
      return false;
  }
}
