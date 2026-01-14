function addNumbers(a, b) {
  // Check for undefined or null values
  if (a === undefined || a === null) {
    throw new Error('First parameter cannot be undefined or null');
  }
  if (b === undefined || b === null) {
    throw new Error('Second parameter cannot be undefined or null');
  }

  // Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers. Received: ' + typeof a + ' and ' + typeof b);
  }

  // Check for NaN
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Parameters must be valid numbers, not NaN');
  }

  // Return the sum
  return a + b;
}

// Example usage:
try {
  console.log(addNumbers(5, 3));              // 8
  console.log(addNumbers(10.5, 2.5));         // 13
  console.log(addNumbers(-5, 10));            // 5
} catch (error) {
  console.error(error.message);
}

// Invalid cases that throw errors:
try {
  console.log(addNumbers('5', 3));            // throws error
} catch (error) {
  console.error('Error:', error.message);     // Error: Both parameters must be numbers
}

try {
  console.log(addNumbers(5, null));           // throws error
} catch (error) {
  console.error('Error:', error.message);     // Error: Second parameter cannot be undefined or null
}

try {
  console.log(addNumbers(undefined, 3));      // throws error
} catch (error) {
  console.error('Error:', error.message);     // Error: First parameter cannot be undefined or null
}

// module.exports = addNumbers;

function toDotCase(str) {
  return str
    .replace(/([A-Z])/g, '.$1')             // Insert dot before uppercase letters
    .replace(/[\s_-]+/g, '.')               // Replace spaces, underscores, and hyphens with dots
    .replace(/\.+/g, '.')                   // Replace multiple dots with single dot
    .toLowerCase()                          // Convert to lowercase
    .replace(/^\./, '');                    // Remove leading dot if present
}

// Example usage:
console.log(toDotCase('helloWorld'));         // hello.world
console.log(toDotCase('hello world'));        // hello.world
console.log(toDotCase('hello_world'));        // hello.world
console.log(toDotCase('hello-world'));        // hello.world
console.log(toDotCase('HelloWorldExample'));  // hello.world.example
console.log(toDotCase('already.dot.case'));   // already.dot.case

module.exports = { addNumbers, toDotCase };
