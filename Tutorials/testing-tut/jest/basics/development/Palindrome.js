// palindrome.js
const palindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

module.exports = palindrome;
