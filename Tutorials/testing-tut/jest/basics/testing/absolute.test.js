const absolute = require("../development/absolute");

// test("positive - if a number is positive", () => {
//   expect(absolute(132423)).toEqual(1);
// });

// test("negative - if a number is negative", () => {
//   expect(absolute(-12423)).toBe(1);
// });

// grouping
describe("absolute", () => {
  it("positive number", () => {
    expect(absolute(1321)).toEqual(1321);
  });
  it("negative number", () => {
    expect(absolute(-1321)).toEqual(1321);
  });
});
