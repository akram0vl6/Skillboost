const questionJavaScript = [
  {
    "question": "You can also find all 100 answers here 👉 [Devinterview.io - JavaScript](https://devinterview.io/questions/web-and-mobile-development/javascript-interview-questions)",
    "answer": "<br>\r\n\r\n## 1. What are the _data types_ present in JavaScript?\r\n\r\nJavaScript has **primitive** and **composite** data types."
  },
  {
    "question": "Primitive Data Types",
    "answer": "- **Boolean**: Represents logical values of **true** or **false**.\r\n- **Null**: Denotes the lack of a value.\r\n\r\n- **Undefined**: Indicates a variable that has been declared but has not been assigned a value.\r\n\r\n- **Number**: Represents numeric values, including integers and floats.\r\n\r\n- **BigInt**: Allows for representation of integers with arbitrary precision.\r\n\r\n- **String**: Encapsulates sequences of characters.\r\n\r\n- **Symbol** (ES6): Provides a unique, immutable value."
  },
  {
    "question": "Composite Data Types",
    "answer": "- **Object**: Represents a set of key-value pairs and is used for more complex data structures.\r\n- **Function**: A callable object that can be defined using regular function syntax or using the `new Function()` constructor (rarely used)."
  },
  {
    "question": "Notable Characteristics",
    "answer": "- JavaScript is **dynamically-typed**, meaning the data type of a variable can change during the execution of a program.\r\n- **Data type coercion** can occur, where values are implicitly converted from one type to another in specific contexts, such as during comparisons.\r\n- Arithmetic operations, particularly when one of the operands is a string, can lead to **implicit type conversions**.\r\n<br>\r\n\r\n## 2. What is the difference between _null_ and _undefined_?\r\n\r\nWhile both **null** and **undefined** represent \"no value\" in JavaScript, they are distinct in their roles and origins."
  },
  {
    "question": "Origin and Context",
    "answer": "- **null** usually denotes an intentionally **absent** value, and developers can set a variable to null to signify the absence of an object or a value. For example, if an API call doesn't return data, you might set a variable to null.\r\n\r\n- **undefined** typically indicates a variable that has been declared but not yet been assigned a value, or a property that doesn't exist on an object."
  },
  {
    "question": "Variable Initialization and Assignment",
    "answer": "- Variables that haven't been assigned a value are `undefined` by default, unless explicitly set to `null`.\r\n  ```javascript\r\n  let foo; // undefined\r\n  let bar = null; // null\r\n  ```"
  },
  {
    "question": "Function Arguments",
    "answer": "- When a function is called, and the parameter isn't provided or its value is not set, the parameter is `undefined`. \r\n- **null** would instead be an explicit value provided as an argument."
  },
  {
    "question": "Object Properties",
    "answer": "- If you try to access a property on an object that doesn't exist, the result is `undefined`.\r\n  ```javascript\r\n  let obj = {};\r\n  console.log(obj.nonExistentProperty); // undefined\r\n  ```\r\n\r\n- **Null** can be used to clear a property value in an object that was previously set.\r\n  ```javascript\r\n  let obj = { prop: 'value' };\r\n  obj.prop = null;\r\n  ```"
  },
  {
    "question": "The Equality Operation",
    "answer": "- In JavaScript, **undefined** and **null** are treated as equal when using loose equality (==) but not strict equality (===)."
  },
  {
    "question": "Use-Cases and Best Practices",
    "answer": "- When you initialize a variable and are not ready to assign a meaningful value, it's more common to use **undefined** instead of **null** to indicate that the value isn't there yet.\r\n- For example, if you declare a user object but don't have their details yet, you might keep it as `undefined`."
  },
  {
    "question": "Code Example",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\nlet var1;\r\nlet var2 = null;\r\n\r\nlet object = {\r\n  a: 1,\r\n  b: undefined\r\n};\r\n\r\nfunction test(arg1, arg2) {\r\n  console.log(arg1);  // undefined: not provided\r\n  console.log(arg2);  // null: provided as such\r\n}\r\n\r\nfunction clearProperty(prop) {\r\n  delete object[prop];\r\n}\r\n\r\nconsole.log(var1);     // undefined\r\nconsole.log(var2);     // null\r\nconsole.log(object.a); // 1\r\nconsole.log(object.b); // undefined\r\nconsole.log(object.c); // undefined\r\n\r\ntest();               // Both arguments are undefined\r\ntest(1, null);        // arg1 is 1, arg2 is null\r\n\r\nclearProperty('b');  // Removes property 'b' from object\r\nconsole.log(object.b); // undefined: Property 'b' was removed, not set to null\r\n```\r\n<br>\r\n\r\n## 3. How does JavaScript handle _type coercion_?\r\n\r\n**Type Coercion** in JavaScript refers to the automatic conversion of values from one data type to another."
  },
  {
    "question": "Explicit and Implicit Coercion",
    "answer": "- **Explicit**: Achieved through methods such as `parseInt()`, `Number()`, and `toString()`.\r\n- **Implicit**: Automatically occurs during operations or comparisons. For example, combining a string and a number in an addition results in the automatic conversion of the number to a string."
  },
  {
    "question": "Common Coercion Scenarios",
    "answer": "1. **Arithmetic Operations**: Strings are coerced to numbers.\r\n    - **Example**: `\"5\" - 3` evaluates to `2`, as the string is coerced to a number.\r\n    \r\n2. **Loose Equality (==)**: Data types are often modified for comparisons.\r\n    - **Example**: `\"4\" == 4` is `true` due to string coercion before the comparison.\r\n\r\n3. **Conditionals** (if and Ternary Operators): Truthiness or falsiness is determined.\r\n    - **Example**: `if(1)` evaluates to `true` because `1` coerces to `true`.\r\n\r\n4. **Logical Operators**: Non-boolean values are coerced to booleans.\r\n    - **Example**: `\"hello\" && 0` evaluates to `0` because the truthy `\"hello\"` short-circuits the `&&` operation, and `0` coerces to `false`.\r\n<br>\r\n\r\n## 4. Explain the concept of _hoisting_ in JavaScript.\r\n\r\n**Hoisting** is a JavaScript mechanism that involves moving variable and function declarations to the top of their containing scope **during the compile phase**. However, the assignments to these variables or the definitions of functions remain in place.\r\n\r\nFor instance, even though the call to `myFunction` appears before its definition, hoisting ensures that it doesn't cause an error."
  },
  {
    "question": "Hoisting in Action",
    "answer": "Here's a Code Example:\r\n\r\n```javascript\r\nconsole.log(myVar); // Undefined\r\nvar myVar = 5;\r\n\r\nconsole.log(myVar); // 5\r\n\r\n// The above code is equivalent to the following during the compile phase:\r\n// var myVar;\r\n// console.log(myVar);\r\n// myVar = 5;\r\n\r\nconsole.log(sayHello()); // \"Hello, World!\"\r\nfunction sayHello() {\r\n    return \"Hello, World!\";\r\n}\r\n\r\n// The above code is equivalent to the following during the compile phase:\r\n// function sayHello() {\r\n//     return \"Hello, World!\";\r\n// }\r\n// console.log(sayHello());\r\n```"
  },
  {
    "question": "Why Hoisting Matters",
    "answer": "Understanding hoisting can help you prevent certain unexpected behaviors in your code. For example, it can shed light on unexpected \"undefined\" values that might appear even after a variable is declared and initialized.\r\n\r\n#"
  },
  {
    "question": "Global Scope and Hoisting",
    "answer": "In the global scope, variables declared with `var` and functions are always hoisted to the top. For example:\r\n\r\n```javascript\r\n// During the compile phase, the following global declarations are hoisted:\r\n// var globalVar;\r\n// function globalFunction() {}\r\n\r\nconsole.log(globalVar); // Undefined\r\nconsole.log(globalFunction()); // \"Hello, Global!\"\r\nvar globalVar = \"I am global Var!\";\r\nfunction globalFunction() {\r\n    return \"Hello, Global!\";\r\n}\r\n```\r\n\r\n#"
  },
  {
    "question": "Local Scope and Hoisting",
    "answer": "Variables and functions declared in local scopes within functions are also hoisted to the top of their scope.\r\n\r\nHere's a Code Example:\r\n\r\n```javascript\r\nfunction hoistingInLocalScope() {\r\n    // These local declarations are hoisted during the compile phase:\r\n    // var localVar;\r\n    // function localFunction() {}\r\n\r\n    console.log(localVar); // Undefined\r\n    localVar = \"I am a local var!\";\r\n    console.log(localFunction()); // \"Hello, Local!\"\r\n\r\n    var localVar;\r\n    function localFunction() {\r\n        return \"Hello, Local!\";\r\n    }\r\n}\r\n```"
  },
  {
    "question": "Best Practices",
    "answer": "To write clean, readable code, it's important to:\r\n\r\n- Declare variables at the top of your scripts or functions to avoid hoisting-related pitfalls.\r\n- Initialize variables before use, **regardless of hoisting**, to ensure predictable behavior."
  },
  {
    "question": "ES6 and Hoisting",
    "answer": "With the introduction of `let` and `const` in ES6, JavaScript's behavior has adapted. Variables declared using `let` and `const` are still hoisted, but unlike `var`, they are **not initialized**.\r\n\r\nHere's an Example:\r\n\r\n```javascript\r\nconsole.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization\r\nlet myLetVar = 5;\r\n```"
  },
  {
    "question": "Constants and Hoisting",
    "answer": "`const` and `let` behave similarly when hoisted, but their difference lies in the fact that `const` must be assigned a value at the time of declaration, whereas `let` does not require an initial value.\r\n\r\nHere's an Example:\r\n\r\n```javascript\r\nconsole.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization\r\nconst myConstVar = 10;\r\n\r\nconsole.log(myLetVar); // Undefined\r\nlet myLetVar = 5;\r\n```\r\n<br>\r\n\r\n## 5. What is the _scope_ in JavaScript?\r\n\r\n**Scope** defines the accessibility and lifetime of variables in a program. In JavaScript, there are two primary types: **Global Scope** and **Local Scope**."
  },
  {
    "question": "Global Scope",
    "answer": "Any variable declared **outside of a function** is in the global scope. These can be accessed from both within functions and from other script tags.\r\n\r\n#"
  },
  {
    "question": "Example: Global Scope",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\nlet globalVar = 'I am global';\r\n\r\nfunction testScope() {\r\n    console.log(globalVar); // Output: 'I am global'\r\n}\r\n\r\ntestScope();\r\nconsole.log(globalVar); // Output: 'I am global'\r\n```"
  },
  {
    "question": "Local Scope",
    "answer": "Variables declared within a **function** (using `let` or `const` or prior to JavaScript ES6 with `var`) have local scope, meaning they are only accessible within that function.\r\n\r\n#"
  },
  {
    "question": "Example: Local Scope",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\nfunction testScope() {\r\n    let localVar = 'I am local';\r\n    console.log(localVar); // Output: 'I am local'\r\n}\r\n\r\n// This statement will throw an error because localVar is not defined outside the function scope\r\n// console.log(localVar);\r\n```"
  },
  {
    "question": "Block Scope",
    "answer": "Starting from **ES6**, JavaScript also supports block scope, where variables defined inside code blocks (denoted by `{}` such as loops or conditional statements) using `let` or `const` are accessible only within that block.\r\n\r\n#"
  },
  {
    "question": "Example: Block Scope",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\nfunction testScope() {\r\n    let localVar = 'I am local';\r\n    if (true) {\r\n        let blockVar = 'I am local to this block';\r\n        console.log(localVar, blockVar); // Both will be accessible\r\n    }\r\n    // This statement will throw an error because blockVar is not defined outside the block scope\r\n    // console.log(blockVar);\r\n}\r\n\r\ntestScope();\r\n```\r\n<br>\r\n\r\n## 6. What is the difference between `==` and `===`?\r\n\r\n**Strict equality** (`===`) in JavaScript requires both value and type to match, testing for more specific conditions and reducing the likelihood of unexpected results.\r\n\r\nIn contrast, the **abstract equality** comparison (`==`) can lead to type coercion, potentially causing counterintuitive outcomes.\r\n\r\nWhile both comparison modes test value equality, `===` ensures an additional match of data type."
  },
  {
    "question": "Illustrative Example: Abstract vs. Strict Equality",
    "answer": "- Abstract Equality: \r\n    - `5 == '5'` evaluates to `true` because JavaScript converts the string to a number for comparison.\r\n- Strict Equality:\r\n    - `5 === '5'` evaluates to `false` because the types are not the same."
  },
  {
    "question": "Key Considerations",
    "answer": "- **Type Safety**: `===` is safer as it avoids unwanted type conversions.\r\n- **Performance**: `===` can be faster, especially for simple comparisons, as it doesn't involve type coercion or additional checks.\r\n- **Clarity**: Favoring `===` can make your code clearer and more predictable."
  },
  {
    "question": "Common Best Practices",
    "answer": "- **Use Strict Equality by Default**: This approach minimizes unintended side effects.\r\n- **Consider Type Coercion Carefully**: In specific cases or with proven understanding, `==` can be suitable, but be cautious about potential confusion."
  },
  {
    "question": "Code Example: Equality Operators",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n// Abstract equality\r\nconsole.log('5' == 5);      // true\r\nconsole.log(null == undefined);  // true\r\nconsole.log(0 == false);    // true\r\n\r\n// Strict equality\r\nconsole.log('5' === 5);     // false\r\nconsole.log(null === undefined); // false\r\nconsole.log(0 === false);   // false\r\n```\r\n<br>\r\n\r\n## 7. Describe _closure_ in JavaScript. Can you give an example?\r\n\r\nIn JavaScript, **closures** enable a **function** to access its outer scope, retaining this access even after the parent function has finished executing. This mechanism provides a powerful tool for data encapsulation and privacy."
  },
  {
    "question": "Core Concept",
    "answer": "When a **function** is defined within another function, it maintains a reference to the variables from the outer function, even after the outer function has completed execution and its local variables are typically no longer accessible."
  },
  {
    "question": "Key Components",
    "answer": "1. **Outer Function (Parent function)**: It contains the inner functions or closures.\r\n2. **Inner Function (Closure)**: Defined within the parent function, it references variables from the outer function.\r\n3. **Lexical Environment**: The context where the inner function is defined, encapsulating the scope it has access to."
  },
  {
    "question": "Example: Password Generator",
    "answer": "Consider a simple scenario of a function in charge of generating a secret password:\r\n\r\n1. The outer function, `generatePassword`, defines a local variable, `password` and returns an inner function `getPassword`.\r\n2. The inner function, `getPassword`, has exclusive access to the `password` variable even after `generatePassword` has executed.\r\n\r\nHere is the JavaScript code:\r\n\r\n```javascript\r\nfunction generatePassword() {\r\n  let password = '';\r\n  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\r\n  const passwordLength = 8;\r\n  for(let i = 0; i < passwordLength; i++) {\r\n    password += characters.charAt(Math.floor(Math.random() * characters.length));\r\n  }\r\n\r\n  return function getPassword() {\r\n      return password;\r\n  };\r\n}\r\n\r\nconst getPassword = generatePassword();\r\n\r\nconsole.log(getPassword()); // Outputs the generated password.\r\n```\r\n\r\nIn this example, `getPassword` still has access to the `password` variable after the `generatePassword` function has completed, thanks to the closure mechanism."
  },
  {
    "question": "Application",
    "answer": "- **Data Privacy**: JavaScript design patterns like the Module and Revealing Module Patterns use closures to keep data private.\r\n\r\n- **Timeouts and Event Handlers**: Closures help preserve the surrounding context in asynchronous operations such as `setTimeout` and event handlers."
  },
  {
    "question": "Pitfalls to Avoid",
    "answer": "- **Memory Leakage**: If not used carefully, closures can cause memory leaks, as the outer function's variables continue to live in memory because of the closure link.\r\n- **Stale Data**: Be mindful of shared variables that might change after a closure has been defined, leading to unexpected behavior."
  },
  {
    "question": "Browser Compatibility",
    "answer": "The concept of closures is a fundamental aspect of the JavaScript language and is supported by all modern browsers and environments.\r\n<br>\r\n\r\n## 8. What is the '_this_ keyword' and how does its context change?\r\n\r\nIn JavaScript, the context of **`this`** refers to the execution context, typically an object that owns the function where `this` is used."
  },
  {
    "question": "'this' in the Global Scope",
    "answer": "In **non-strict** mode, `this` in the global scope refers to the `window` object. In **strict** mode, `this` is `undefined`."
  },
  {
    "question": "'this' in Functions",
    "answer": "In **non-arrow functions**, the value of `this` depends on how the function is **invoked**. When invoked:\r\n\r\n- As a method of an object: `this` is the object.\r\n- Alone: In a browser, `this` is `window` or `global` in Node.js. In strict mode, it's `undefined`.\r\n- With `call`, `apply`, or `bind`: `this` is explicitly set.\r\n- As a constructor (with `new`): `this` is the newly created object."
  },
  {
    "question": "'this' in Arrow Functions",
    "answer": "Arrow functions have a **fixed context** for `this` defined at **function creation** and are not changed by how they are invoked.\r\n\r\n- They do **not have** their own `this`.\r\n- They use the `this` from their surrounding lexical context (the enclosing function or global context)."
  },
  {
    "question": "Code Example: Global Context",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n// Main\r\nlet globalVar = 10;\r\n\r\nfunction globalFunction() {\r\n    console.log('Global this: ', this.globalVar);\r\n    console.log('Global this in strict mode: ', this);\r\n}\r\n\r\nglobalFunction();  // Output: 10, window or undefined (in strict mode)\r\n\r\n// In Node.js, it will be different, because \"window\" is not defined. But \"this\" will refer to the global object.\r\n```\r\n<br>\r\n\r\n## 9. What are _arrow functions_ and how do they differ from regular functions?\r\n\r\nLet's look at the key features of **arrow functions** and how they differ from traditional functions in JavaScript."
  },
  {
    "question": "Arrow Functions: Key Features",
    "answer": "- **Concise Syntax**:\r\n  - Especially useful for short, one-liner functions.\r\n  - No need for `function` keyword or **braces** if there's a single expression.  \r\n  \r\n- **Implicit Return**:\r\n  - When there's no explicit `{ return ... ;}` statement, arrow functions return the result of the single expression inside.\r\n\r\n- **`this` Binding**:\r\n  - Does not have its **own `this`**. It's \"inherited\" from the surrounding (lexical) context. This feature is known as '**lexical scoping**'."
  },
  {
    "question": "Code Example: Standard Function vs. Arrow Function",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n// Standard Function\r\nfunction greet(name) {\r\n  return \"Hello, \" + name + \"!\";\r\n}\r\n\r\n// Arrow Function\r\nconst greetArrow = name => \"Hello, \" + name + \"!\";\r\n```\r\n\r\nIn the code above, `greet` is a standard function, while `greetArrow` is an arrow function, showcasing the difference in syntax and required keywords."
  },
  {
    "question": "When to Use Arrow Functions",
    "answer": "- **Event Handlers**: Ideal for concise, inline event handling, where `this` context can be inherited from the lexical scope.\r\n\r\n- **Callback Functions**: Useful for array methods like `map`, `filter`, and `reduce`.\r\n\r\n- **Avoidance of `this` Redefinition**: When you want to maintain the surrounding context of `this` and avoid unintended redefinition."
  },
  {
    "question": "Code Example: Arrow Function and `this` Context",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n// Using traditional functions\r\ndocument.getElementById('myButton').onclick = function() {\r\n  console.log('Button clicked:', this);  // Refers to the button element\r\n};\r\n\r\n// Using arrow functions\r\ndocument.getElementById('myButton').onclick = () => {\r\n  console.log('Button clicked:', this);  // Refers to the global/window object\r\n};\r\n```\r\n\r\nIn the arrow function example, the context of `this` does not refer to the button element, but to the global `window` object, because arrow functions do not have their own binding of `this`. Instead, they inherit `this` from their lexical scope, which in this case is the global context.\r\n<br>\r\n\r\n## 10. What are _template literals_ in JavaScript?\r\n\r\n**Template literals** are a feature in modern JavaScript versions that offer a more flexible and readable way to work with strings. They are often referred to as \"template strings\"."
  },
  {
    "question": "Key Features",
    "answer": "- **Multiline Text**: Template literals support multiline strings without requiring escape characters or string concatenation with a `+` sign.\r\n- **String Interpolation**: They enable the seamless embedding of JavaScript expressions within strings, using `${}`."
  },
  {
    "question": "Syntax",
    "answer": "- **Single Versus Double Quotes**: For template literals, use backticks (\\`) instead of single quotes ('') or double quotes (\"\").\r\n- **Placeholder**: The `${expression}` placeholder within the backticks allows for variable and expression injection."
  },
  {
    "question": "Example:",
    "answer": "```javascript\r\nlet name = \"John\";\r\nlet message = `Hi ${name}!`;\r\n\r\nconsole.log(message);  // Output: \"Hi John!\"\r\n```"
  },
  {
    "question": "Benefits",
    "answer": "- **Readability**: They can make code more understandable, especially when dealing with longer or complex strings, by keeping content closer to its intention.\r\n- **Interpolation & Expression**: Template literals reduce verbosity and rendering logic when integrating dynamic data."
  },
  {
    "question": "Code Example: Multiline Text and String Interpolation",
    "answer": "```javascript\r\n// Regular String\r\nlet poem = \"Roses are red,\\nViolets are blue,\\nSugar is sweet,\\nAnd so are you.\";\r\n\r\n// Template Literal\r\nlet poemTemplate = `\r\n  Roses are red,\r\n  Violets are blue,\r\n  Sugar is sweet,\r\n  And so are you.\r\n`;\r\n```"
  },
  {
    "question": "Browser Compatibility Concerns",
    "answer": "Template literals are universally supported in modern browsers and are now considered a **core JavaScript feature**. However, they may not work in older browsers such as Internet Explorer without transpilation or polyfilling.\r\n<br>\r\n\r\n## 11. What is a _higher-order function_ in JavaScript?\r\n\r\nA **higher-order function** in JavaScript is a function that can take other functions as arguments or can return functions. This feature enables functional programming paradigms such as `map`, `reduce`, and `filter`. Higher-order functions offer versatility and modularity, fostering streamlined, efficient code."
  },
  {
    "question": "Key Characteristics",
    "answer": "- **First-class functions**: Functions in JavaScript are considered first-class, meaning they are a legitimate data type and can be treated like any other value, including being assigned to variables, stored in data structures, or returned from other functions.\r\n\r\n- **Closure support**: Due to closures, a higher-order function can transport not just the enclosed data within the function definition, but also the lexical environment in which that data resides.\r\n\r\n- **Dynamic code**: Because JavaScript allows functions to be dynamically constructed and named, they can be dynamically passed to higher-order functions."
  },
  {
    "question": "Practical Applications",
    "answer": "- **Callback Execution**: Functions like `setTimeout` and `addEventListener` take a function as an argument and are thus higher-order.\r\n\r\n- **Event Handling**: Many event-driven systems leverage higher-order functions for tasks such as event subscription and emission.\r\n\r\n- **Iterative Operations**: The `map`, `filter`, and `reduce` functions in JavaScript operate on arrays and require functions to be passed, making them higher-order.\r\n\r\n- **Code Abstraction**: Higher-order functions enable the encapsulation of repetitive tasks, promoting cleaner, more readable code."
  },
  {
    "question": "Code Example: Higher-order Functions",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n// Simple higher-order function\r\nfunction multiplier(factor) {\r\n  return function(num) {\r\n    return num * factor;\r\n  };\r\n}\r\n\r\n// Invoke a higher-order function\r\nconst twice = multiplier(2);\r\nconsole.log(twice(5));  // Output: 10\r\n\r\n// Functional programming with higher-order functions\r\nconst numbers = [1, 2, 3, 4, 5];\r\nconst doubled = numbers.map(multiplier(2));  // [2, 4, 6, 8, 10]\r\nconst tripled = numbers.map(multiplier(3));  // [3, 6, 9, 12, 15]\r\n```\r\n<br>\r\n\r\n## 12. Can functions be assigned as values to variables in JavaScript?\r\n\r\nYes, **JavaScript** supports first-class functions, meaning **functions can be treated as variables** and then assigned to other variables or passed as arguments to other functions.\r\n\r\nFunctions defined as regular functions or arrow functions are both first-class in JavaScript."
  },
  {
    "question": "Practical Code Example",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n// Define a function\r\nfunction greet() {\r\n  console.log('Hello!');\r\n}\r\n\r\n// Assign the function to a variable\r\nlet sayHello = greet;\r\n\r\n// Call the function through the variable\r\nsayHello();  // Output: \"Hello!\"\r\n\r\n// Reassign the variable to a new function\r\nsayHello = function() {\r\n  console.log('Bonjour!');\r\n};\r\n\r\n// Call it again to see the new behavior\r\nsayHello();  // Output: \"Bonjour!\"\r\n```"
  },
  {
    "question": "Practical Use Cases",
    "answer": "- **Callbacks**: Functions can be passed as parameters to other functions.\r\n  \r\n- **Event Handling**: In web development, functions define how to respond to specific events, and these functions are often attached to event listeners.\r\n\r\n- **Modular Development**: In programming patterns like the Module pattern, functions are defined within a scope and then returned, similar to variables.\r\n\r\n- **Higher-Order Functions**: These functions operate on other functions, taking them as arguments or returning them, and are an essential part of many modern JavaScript libraries and frameworks.\r\n<br>\r\n\r\n## 13. How do _functional programming_ concepts apply in JavaScript?\r\n\r\n**Functional Programming** (FP) concepts in JavaScript are a direct result of the language's first-class functions. Key FP principles, such as immutability, pure functions, and **declarative** style, play a crucial role."
  },
  {
    "question": "Core Concepts",
    "answer": "#"
  },
  {
    "question": "First-Class Functions and Higher-Order Functions",
    "answer": "JavaScript treats functions as first-class citizens, allowing them to be assigned to variables, passed as parameters, and returned from other functions. This feature is foundational to FP in the language.\r\n\r\n#"
  },
  {
    "question": "Code Example:",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\nconst sayHello = () => console.log('Hello!');\r\nconst runFunction = (func) => func();\r\n\r\nrunFunction(sayHello);  // Output: \"Hello!\"\r\n```\r\n<br>\r\n\r\n## 14. What are _IIFEs_ (Immediately Invoked Function Expressions)?\r\n\r\nThe **Immediately Invoked Function Expression** (IIFE) design pattern employs an anonymous function that gets executed promptly after its definition.\r\n\r\nKey characteristics of IIFEs include localized variable scopes and immediate activation upon interpreter parsing."
  },
  {
    "question": "Code Example: IIFE",
    "answer": "Here is the JavaScript code:\r\n\r\n```javascript\r\n(function(){\r\n    var foo = 'bar';\r\n    console.log(foo);\r\n})();\r\n```\r\n\r\nIn this example, the function is enclosed within parentheses, ensuring the enclosed function is evaluated as an expression. Subsequently, it is invoked with a trailing pair of parentheses."
  },
  {
    "question": "Core Functions of IIFE",
    "answer": "1. **Encapsulation**: Through lexical scoping, IIFEs safeguard variables from leaking into the global scope. This, in turn, averts unintended variable tampering in the global context.\r\n\r\n2. **Data Hiding**: Internal functions or data can be hidden from external access, providing a mechanism for information concealment and access control.\r\n\r\n3. **Initialization**: The IIFE structure is ideal for setting up initial conditions, like binding events or pre-processing data."
  },
  {
    "question": "Use Cases",
    "answer": "- **Avoiding Variable Pollution**: When interfacing with libraries or inserting code snippets, IIFEs prevent global scope pollution.\r\n\r\n- **Module Patterns**: IIFEs, in combination with **closures**, lay the groundwork for modular code organization by shielding private variables and functions."
  },
  {
    "question": "Modern Alternatives",
    "answer": "With the introduction of ES6 and its `let` and `const` declarations, as well as block-scoped lexical environments, the necessity of IIFEs has reduced. Additionally, **arrow functions** provide a more concise method for defining immediately invoked functions."
  },
  {
    "question": "IIFE Variants",
    "answer": "1. **Parentheses Invocation**: A pair of parentheses immediately invoke the enclosed function. While this approach is more extensive, it's devoid of self-documenting advantages.\r\n    ```javascript\r\n    (function(){\r\n        console.log('Invoked!');\r\n    })();\r\n    ```\r\n\r\n2. **Wrapping in Operators**: Similar to using parentheses for invocation, the `!`, `+`, or `-` operators are sometimes used for invoking clarity. For instance:\r\n    ```javascript\r\n    !function(){\r\n        console.log('Invoked!');\r\n    }();\r\n    ```\r\n\r\n3. **Named IIFE**: Though not as common, naming an IIFE can assist with self-referencing. This is most effective when the intention is to have a more comprehensive stack trace during debugging.\r\n    ```javascript\r\n    (function factorial(n){\r\n        if (n <= 1) return 1;\r\n        return n * factorial(n-1);\r\n    })(5);\r\n    ```\r\n\r\n#"
  },
  {
    "question": "Caution on Minification",
    "answer": "When leveraging IIFEs, exercise caution while using minifiers to shrink JavaScript files. Minification might lead to unintended outcomes, altering the previous scope expectations.\r\n<br>\r\n\r\n## 15. How do you create _private variables_ in JavaScript?\r\n\r\nIn JavaScript, encapsulating private state within an object can be achieved using a **closure**. This ensures the state is local to the object and not directly accessible from outside."
  },
  {
    "question": "How Closures Work",
    "answer": "A **closure** allows a function to retain access to the **lexical environment** (the set of variable bindings at the point of function declaration) in which it was defined, even when the function is executed outside that lexical environment.\r\n\r\nThis means that any **inner function**, defined inside another function, has access to the **outer function's variables**, and that access is maintained even after the outer function has finished executing.\r\n\r\nFor example:\r\n```javascript\r\nfunction outerFunction() {\r\n    let outerVar = 'I am outer';  // This variable is in the lexical environment of outerFunction\r\n\r\n    function innerFunction() {\r\n        console.log(outerVar);  // Accesses outerVar from the lexical environment of outerFunction\r\n    }\r\n\r\n    return innerFunction;\r\n}\r\n\r\nlet myInnerFunction = outerFunction();\r\nmyInnerFunction();  // Logs: \"I am outer\"\r\n```\r\n\r\nHere, `innerFunction` retains access to `outerVar`."
  },
  {
    "question": "Practical Implementation with Constructor Functions and Modules",
    "answer": "#"
  },
  {
    "question": "Constructor Functions",
    "answer": "When defining a JavaScript **constructor function** with `function` and `new`, closure can be used to associate private state with each instance:\r\n\r\n```javascript\r\nfunction Gadget() {\r\n    let secret = 'top secret';\r\n    this.setSecret = function (value) {\r\n        secret = value;\r\n    };\r\n    this.getSecret = function () {\r\n        return secret;\r\n    };\r\n}\r\n\r\nlet phone = new Gadget();\r\nphone.setSecret('new secret');\r\nconsole.log(phone.getSecret());  // 'new secret'\r\n```\r\n\r\nIn this example, `secret` is private to each `Gadget` instance, thanks to closure.\r\n\r\n#"
  },
  {
    "question": "Modules",
    "answer": "In modern JavaScript, **module patterns** combined with **immediately-invoked function expressions** (IIFE) are often used for encapsulation and data hiding.\r\n\r\n- The **revealing module pattern** enables selective exposure of private members.\r\n\r\n- The **IIFE pattern** immediately executes and returns the object to be assigned, effectively creating a module.\r\n\r\nHere is the code:\r\n\r\n```javascript\r\nlet myModule = (function () {\r\n    let privateVariable = 'I am private';\r\n\r\n    function privateMethod() {\r\n        console.log('I am a private method');\r\n    }\r\n\r\n    return {\r\n        publicMethod: function () {\r\n            console.log('I am a public method');\r\n        },\r\n        getPrivateVariable: function () {\r\n            return privateVariable;\r\n        }\r\n    };\r\n})();\r\n\r\nconsole.log(myModule.getPrivateVariable());  // 'I am private'\r\nmyModule.privateMethod();  // Throws an error because privateMethod is not exposed\r\n```\r\n\r\nIn this example, `privateVariable` and `privateMethod` are accessible only within the IIFE's lexical environment, thus making them private.\r\n\r\nJavaScript tools like TypeScript and Babel also offer modules such as `module.export`, providing additional options for encapsulation.\r\n<br>\r\n\r\n\r\n\r\n#"
  },
  {
    "question": "Explore all 100 answers here 👉 [Devinterview.io - JavaScript](https://devinterview.io/questions/web-and-mobile-development/javascript-interview-questions)",
    "answer": "<br>\r\n\r\n<a href=\"https://devinterview.io/questions/web-and-mobile-development/\">\r\n<img src=\"https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555\" alt=\"web-and-mobile-development\" width=\"100%\">\r\n</a>\r\n</p>"
  }
]