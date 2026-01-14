/**
 * STEP 1: What is kebab-case?
 * 
 * Kebab-case is a naming convention where words are separated by hyphens (-),
 * all letters are lowercase, and there are no spaces or underscores.
 * It's called "kebab-case" because the hyphens look like skewers in a kebab.
 * 
 * Examples:
 * 1. "hello world" → "hello-world" (spaces replaced with hyphens)
 * 2. "helloWorld" → "hello-world" (camelCase converted to kebab-case)
 * 3. "SCREEN_NAME" → "screen-name" (snake_case with uppercase converted)
 * 4. "user-profile-page" → "user-profile-page" (already in kebab-case)
 */

/**
 * STEP 2: Step-by-step logic for converting to kebab-case
 * 
 * 1. Handle consecutive uppercase letters:
 *    - Insert a hyphen before each uppercase letter that follows a lowercase letter
 *    - Example: "XMLParser" → "xml-parser"
 * 
 * 2. Replace separators:
 *    - Replace spaces, underscores, and other separators with hyphens
 *    - Example: "hello world", "hello_world", "hello world" all become "hello-world"
 * 
 * 3. Handle multiple consecutive separators:
 *    - Collapse multiple hyphens into a single hyphen
 *    - Example: "hello---world" → "hello-world"
 * 
 * 4. Convert to lowercase:
 *    - Ensure all letters are lowercase
 *    - Example: "HelloWorld" → "hello-world"
 * 
 * 5. Clean up edges:
 *    - Remove leading or trailing hyphens
 *    - Example: "-hello-world-" → "hello-world"
 */

/**
 * STEP 3: JavaScript function implementation
 */
function toKebabCase(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  return str
    // Insert hyphen before uppercase letters that follow lowercase letters (camelCase handling)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    
    // Insert hyphen before uppercase letters that are followed by lowercase letters (XMLParser → xml-parser)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    
    // Replace spaces, underscores, and other non-alphanumeric characters (except hyphens) with hyphens
    .replace(/[\s_\.\,\!\@\#\$\%\^\&\*\(\)\+\=\[\]\{\}\;\:\'\"\<\>\?\/\\|`~]+/g, '-')
    
    // Replace multiple consecutive hyphens with a single hyphen
    .replace(/-+/g, '-')
    
    // Convert to lowercase
    .toLowerCase()
    
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
}

// ============================================
// EXAMPLE INPUTS AND OUTPUTS
// ============================================

console.log('=== kebab-case Conversion Examples ===\n');

const testCases = [
  // Basic cases
  'helloWorld',          // helloworld -> hello-world
  'hello world',         // hello-world
  'hello_world',         // hello-world
  
  // CamelCase variations
  'HelloWorld',          // hello-world
  'myVariableName',      // my-variable-name
  
  // Snake_case variations
  'SCREEN_NAME',         // screen-name
  'user_profile_id',     // user-profile-id
  
  // Already kebab-case
  'already-kebab-case',  // already-kebab-case
  
  // Complex cases with multiple separators
  'hello---world',       // hello-world
  'hello  world',        // hello-world
  'hello_world-test',    // hello-world-test
  
  // Mixed casing
  'XMLHttpRequest',      // xml-http-request
  'IOError',             // io-error
  'parseHTMLString',     // parse-html-string
  
  // With numbers
  'user2profile3name',   // user2profile3name
  'User2Profile3Name',   // user2-profile3-name
  
  // Edge cases
  '  spaced  out  ',     // spaced-out
  '__double__underscore__', // double-underscore
  'single',              // single
  '',                    // (empty string)
];

testCases.forEach((testCase) => {
  try {
    const result = toKebabCase(testCase);
    console.log(`"${testCase}" → "${result}"`);
  } catch (error) {
    console.log(`"${testCase}" → Error: ${error.message}`);
  }
});

module.exports = toKebabCase;
