function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return "Invalid operator";
  }
}

function performCalculation() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Please enter valid numbers!";
    return;
  }

  const result = calculate(num1, num2, operator);
  document.getElementById("result").innerText = `Result: ${num1} ${operator} ${num2} = ${result}`;
}

