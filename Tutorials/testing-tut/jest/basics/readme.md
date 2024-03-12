#### Jest testing tut:

- export the module to use it in other places
- make sure your type is module in the package.json file
- make sure your test file name as **test.sum.js** where sum.js is your module name;
- import inside test file and write test condition like this

```js
const sum = require("./sum");

test("add two number", () => {
  expect(sum(1, 3)).toBe(4);
});
```
