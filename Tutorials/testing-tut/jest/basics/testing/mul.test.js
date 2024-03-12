const { mul } = require("../development/mul");

test("multiply two number", () => {
  expect(mul(3, 4)).toBe(12);
});
