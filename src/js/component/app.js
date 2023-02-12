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
  calcScreen.innerHTML = readOnScreen().slice(0, -1);
}
function clearScreen() {
  calcScreen.innerHTML = "";
}
function clearHistoryScreen() {
  calcHistory.innerHTML = "";
}
function writeOnScreen(target) {
  calcScreen.textContent += target;
}
function writeOnHistoryScreen(target) {
  calcHistory.textContent += target;
}
function readOnScreen() {
  return calcScreen.textContent;
}
function readOnHistoryScreen() {
  return calcHistory.textContent;
}
function extractsNumberText(string) {
  const matches = string.match(/([0-9]+([.][0-9]*)?|[.][0-9]+)/);
  if (matches) return parseFloat(matches[0]);
  return null;
}
function isOperatored(string) {
  const regex = new RegExp(`([${multy}]+|[÷]+|[\+]+|[${minus}]+)`, "g");
  return regex.test(string);
}
function screenLogic(type, value) {
  const onScreen = readOnScreen();
  const onHistoryScreen = readOnHistoryScreen();
  if (
    type === "number" ||
    (type !== "regular" &&
      value !== "=" &&
      !isOperatored(onScreen) &&
      !isOperatored(onHistoryScreen)) ||
    (value === "." && !onScreen.includes("."))
  )
    writeOnScreen(value);
}
function historyScreenLogic(value) {
  const onScreen = readOnScreen();
  const onHistoryScreen = readOnHistoryScreen();
  if (value === "=" && !onHistoryScreen) {
    writeOnHistoryScreen(onScreen);
    clearScreen();
  }
}
function showAdvanceCalcBtn(value) {
  if (value === "SAC") {
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
}
function clearAllScreenBtn(value) {
  if (value === "CE") {
    clearScreen();
    clearHistoryScreen();
  }
}
function clearScreenBtn(value) {
  if (value === "cls") {
    deleteFromScreen();
  }
}
function addingLogic(target) {
  screenLogic(target.type, target.value);
  historyScreenLogic(target.value);
  showAdvanceCalcBtn(target.value);
  clearScreenBtn(target.value);
  clearAllScreenBtn(target.value);
}
