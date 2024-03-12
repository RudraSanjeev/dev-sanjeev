const checkEven = require("../development/checkEven");

// test("check even", () => {
//   expect(checkEven(2)).toBe(true);
// });

// test("check odd", () => {
//   expect(checkEven(1)).toBe(false);
// });

describe("check even", () => {
  it("even number: ", () => {
    expect(checkEven(2)).toBe(true);
  });

  it("odd number: ", () => {
    expect(checkEven(5)).toBe(false);
  });
});
