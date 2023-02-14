const getConstant = {
    pi: Math.PI,
    e: Math.E,
};

function factorial(value) {
  if (value == 0 || value == 1) return 1;
  return factorial(value - 1) * value;
}

const getOperation = {
  addaction(x, y) {
    return x + y;
  },
  subtraction(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    if (!y) {
      throw new Error("invalid number or 2nd number equal to zero");
    }
    return x / y;
  },
  modulo(x, y) {
    return x % y;
  },
  ln(x) {
    return Math.log(x);
  },
  log(x) {
    return Math.log10(x);
  },
  sin(x) {
    return Math.sin(x);
  },
  cos(x) {
    return Math.cos(x);
  },
  tan(x) {
    return Math.tan(x);
  },
  power(x, y) {
    return Math.pow(x, y);
  },
  factorial(x) {
    return factorial(x);
  },
  invert(x) {
    if (!x) {
      throw new Error("invalid number or number equal to zero");
    }
    return 1 / x;
  },
};

function calculation(equation) {
  const { type, ...rest } = equation;
  switch (type) {
    case "operator":
      const { operator, numbers } = rest.value;
      return getOperation[operator](...numbers);
    case "constant":
      const { value } = rest;
      return getConstant[value];
    default:
      break;
  }
}