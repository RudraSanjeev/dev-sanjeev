const palindrome = require("../development/Palindrome");

test("is palindrome or not", () => {
  expect(palindrome("aba")).toBe(true);
});
