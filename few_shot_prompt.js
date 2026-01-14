function toCamelCase(str) {
  return str
    .toLowerCase()                                    // Convert to lowercase first
    .replace(/[_\s-]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')  // Replace separators and uppercase next char
    .replace(/^./, (char) => char.toLowerCase());    // Ensure first character is lowercase
}

// Example usage:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber
console.log(toCamelCase('hello world test'));// helloWorldTest
console.log(toCamelCase('my-user_name test'));// myUserNameTest

module.exports = toCamelCase;
