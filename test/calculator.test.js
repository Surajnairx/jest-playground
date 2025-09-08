import { calculator } from "../src/calculator";
test("should test the calculator add functionality", () => {
  expect(calculator.add(5, 5)).toEqual(10);
});

test("should test the calculator subtract functionality", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

test("should test the calculator multiplication functionality", () => {
  expect(calculator.multiply(5, 2)).toEqual(10);
});

test("should test the calculator division functionality", () => {
  expect(calculator.division(10, 2)).toBe(5);
});
