let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  if (currentInput === '0' || currentInput === '') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    case '^':
      result = Math.pow(prev, current);
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}
