function Calculator() {
  const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const division = (a, b) => {
    return a / b;
  };

  return { add, subtract, multiply, division };
}

export const calculator = Calculator();
