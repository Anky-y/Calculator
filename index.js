const result = document.querySelector(`.result`);
const subResult = document.querySelector(`.subResult`);
const modeBtn = document.querySelector(`.mode-button`);
const modeText = document.querySelector(`.mode-text`);
const mode = document.querySelector(`.mode`);
const screen = document.querySelector(`.screen`);
const btnContainer = document.querySelectorAll(`.grid-item`);

const clearScreen = function () {
  result.textContent = "";
  subResult.textContent = "";
};

const display = function (value) {
  result.textContent += value;
};

const changeSign = function () {
  const firstChar = result.textContent.charAt(0);
  if (firstChar === "-") {
    result.textContent = result.textContent.substring(1);
  } else {
    result.textContent = "-" + result.textContent;
  }
};

const percentage = function () {
  result.textContent = eval(result.textContent / 100);
};

const backspace = function () {
  result.textContent = result.textContent.slice(0, -1);
};

const calculate = function () {
  const equation = result.textContent;
  if (equation) {
    const answer = eval(equation.replaceAll(`÷`, `/`).replaceAll(`×`, `*`));
    if (answer % 1 !== 0) {
      result.textContent = answer.toFixed(6);
    } else {
      result.textContent = answer;
    }
    subResult.textContent = equation;
  }
};

mode.addEventListener(`click`, function () {
  if (modeBtn.textContent === ` light_mode `) {
    modeBtn.textContent = ` dark_mode `;
    modeText.textContent = `Dark Mode`;
    mode.classList.remove(`light-mode__mode`);
    screen.classList.remove(`light-mode__screen`);
    subResult.classList.remove(`light-mode__subresult`);
    for (const griditem of btnContainer) {
      if (griditem.classList.contains(`colored-grid-item`)) {
        griditem.classList.remove(`light--mode__btn__color`);
      }
    }
    for (const griditem of btnContainer) {
      griditem.classList.remove(`light--mode__background__color`);
    }
  } else {
    modeBtn.textContent = ` light_mode `;
    modeText.textContent = `Light Mode`;
    mode.classList.add(`light-mode__mode`);
    screen.classList.add(`light-mode__screen`);
    subResult.classList.add(`light-mode__subresult`);
    for (const griditem of btnContainer) {
      if (griditem.classList.contains(`colored-grid-item`)) {
        griditem.classList.add(`light--mode__btn__color`);
      }
    }
    for (const griditem of btnContainer) {
      griditem.classList.add(`light--mode__background__color`);
    }
  }
});
