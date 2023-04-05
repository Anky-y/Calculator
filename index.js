const result = document.querySelector(`.result`);
const subResult = document.querySelector(`.subResult`);

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
