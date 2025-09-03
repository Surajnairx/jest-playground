import sum from "../src/sum";
test("checking the sum function", () => {
  expect(sum(1, 2)).toBe(3);
});

test("checking the sum fucntion", () => {
  expect(sum(2, 2)).toBe(6);
});
