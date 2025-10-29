const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
display.value = '';

class Calculator {
  constructor() {
    this.valor1 = null;
    this.valor2 = null;
    this.operation = null;
  }

  setValueOne(value1) {
    this.valor1 = value1;
  }

  setValueTwo(value2) {
    this.valor2 = value2;
  }

  setOperation(op) {
    this.operation = op;
  }

  sum(a, b) { return a + b; }
  rest(a, b) { return a - b; }
  divide(a, b) { return a / b; }
  multiplication(a, b) { return a * b; }

  calculate() {
    if (this.operation === '+') return this.sum(this.valor1, this.valor2);
    if (this.operation === '-') return this.rest(this.valor1, this.valor2);
    if (this.operation === '*') return this.multiplication(this.valor1, this.valor2);
    if (this.operation === '/') return this.divide(this.valor1, this.valor2);
  }

  clear() {
    this.valor1 = null;
    this.valor2 = null;
    this.operation = null;
  }
}

const calculator = new Calculator();

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (value === 'C') {
      display.value = '';
      calculator.clear();
      return;
    }


    if (!isNaN(value) || value === '.') {
      display.value += value;
      return;
    }

    if (value === '+' || value === '-' || value === 'x' || value === '÷') {
      calculator.setValueOne(Number(display.value));

      const op = value === 'x' ? '*' : value === '÷' ? '/' : value;
      calculator.setOperation(op);
      display.value = '';
      return;
    }


    if (value === '=') {
      calculator.setValueTwo(Number(display.value));
      const result = calculator.calculate();
      display.value = result;
      calculator.clear();
    }
  });
});