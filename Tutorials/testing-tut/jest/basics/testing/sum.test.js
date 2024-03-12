const { sum } = require("../development/sum");

test("add two number", () => {
  expect(sum(1, 3)).toBe(4);
});
