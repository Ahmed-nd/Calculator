class Calculator {
  constructor(num1 = 0, op = "", num2 = 0) {
    this.num1 = num1;
    this.op = op;
    this.num2 = num2;
  }
  get result() {
    switch (this.op) {
      case "x":
        return this.num1 * this.num2;
      case "/":
        return this.num1 / this.num2;
      case "+":
        return this.num1 + this.num2;
      case "-":
        return this.num1 - this.num2;
      case "%":
        return this.num1 * 100;
      case "ln":
        return Math.log(this.num1);
      case "log":
        return Math.log10(this.num1);
      case "sin":
        return Math.sin(this.num1);
      case "cos":
        return Math.cos(this.num1);
      case "tan":
        return Math.tan(this.num1);
      case "^":
        return Math.pow(this.num1, this.num2);
      case "factorial":
        return factorial(this.num1);
      case "invert":
        return 1 / this.num1;
      case "pi":
        return Math.PI;
      case "e":
        return Math.exp(1);
    }
  }
}

const calculator = new Calculator;