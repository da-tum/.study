

### 1. JavaScript Introduction:
JavaScript (JS) is a high-level, dynamic, and versatile programming language primarily used for front-end web development. It allows you to add interactivity and dynamic behavior to websites. Here are some key features of JavaScript:

- **Interactivity:** JavaScript enables you to create interactive web pages by responding to user actions like clicks, inputs, and more.

- **Versatility:** It can be used not only for web development but also for server-side scripting (Node.js), game development, mobile app development, and more.

- **Dynamic:** JavaScript is dynamically typed, meaning you don't need to declare variable types explicitly.

- **Client-Side:** In web development, it's mainly used for client-side scripting, meaning it runs in the user's browser.

- **Easy to Learn:** It has a relatively low entry barrier for beginners.

### 2. JavaScript Variables:
Variables are used to store data in JavaScript. There are three ways to declare variables:

- **let:** Variables declared with `let` can be reassigned, and they have block scope.

  ```javascript
  let x = 5;
  x = 10; // You can reassign 'x'
  ```

- **const:** Variables declared with `const` cannot be reassigned, but they also have block scope.

  ```javascript
  const pi = 3.14159;
  // pi = 3.14; // This will result in an error, you can't reassign 'pi'
  ```

- **var:** Variables declared with `var` can be reassigned and have function scope (or global scope if declared outside any function). However, it's considered outdated, and it's better to use `let` and `const` for better scoping.

### 3. JavaScript Data Types:
JavaScript has several data types, including:

- **Number:** Represents numeric values. It can be integers or floating-point numbers.

  ```javascript
  let age = 30;
  let price = 19.99;
  ```

- **String:** Represents text. You can use single or double quotes to create strings.

  ```javascript
  let name = "John";
  let message = 'Hello, World!';
  ```

- **Undefined:** Represents a variable that has been declared but has no value assigned to it.

  ```javascript
  let x;
  console.log(x); // Outputs 'undefined'
  ```

- **null:** Represents an intentional absence of any object or value.

  ```javascript
  let empty = null;
  ```

- **Boolean:** Represents true or false values.

  ```javascript
  let isTrue = true;
  let isFalse = false;
  ```

- **Symbol:** Introduced in ES6, Symbols are unique and immutable values often used as object property keys.

  ```javascript
  const uniqueKey = Symbol('description');
  ```

- **Non-primitive Data Types:** These include Objects and Functions, which are more complex data structures.

  ```javascript
  let person = { name: "Alice", age: 25 };
  let greet = function() {
      console.log("Hello!");
  };
  ```


### JavaScript Operators

#### 1. Arithmetic Operators
Arithmetic operators are used to perform mathematical operations in JavaScript. Here are some common ones:

- **Addition (+):** Adds two numbers.

  ```javascript
  let sum = 5 + 3; // sum is 8
  ```

- **Subtraction (-):** Subtracts one number from another.

  ```javascript
  let difference = 10 - 3; // difference is 7
  ```

- **Multiplication (*):** Multiplies two numbers.

  ```javascript
  let product = 4 * 6; // product is 24
  ```

- **Division (/):** Divides one number by another.

  ```javascript
  let quotient = 15 / 3; // quotient is 5
  ```

- **Modulus (%):** Returns the remainder of a division.

  ```javascript
  let remainder = 10 % 3; // remainder is 1
  ```

#### 2. Relational Operators
Relational operators are used to compare values. They return a Boolean result (true or false).

- **Equality (==):** Checks if two values are equal, but it may perform type coercion.

  ```javascript
  5 == "5"; // true (value comparison, type coerced)
  ```

- **Inequality (!=):** Checks if two values are not equal, but it may perform type coercion.

  ```javascript
  5 != "6"; // true (value comparison, type coerced)
  ```

- **Strict Equality (===):** Checks if two values are equal without type coercion (same value and same type).

  ```javascript
  5 === "5"; // false (strict equality)
  ```

- **Strict Inequality (!==):** Checks if two values are not equal without type coercion.

  ```javascript
  5 !== "5"; // true (strict inequality)
  ```

#### 3. Logical Operators
Logical operators are used to perform logical operations.

- **AND (&&):** Returns true if both operands are true.

  ```javascript
  true && true; // true
  true && false; // false
  ```

- **OR (||):** Returns true if at least one operand is true.

  ```javascript
  true || false; // true
  false || false; // false
  ```

- **NOT (!):** Negates the value of an operand.

  ```javascript
  !true; // false
  !false; // true
  ```

#### 4. Bitwise Operators
Bitwise operators perform operations on binary representations of numbers.

- **Bitwise AND (&):** Performs a bitwise AND operation.

  ```javascript
  5 & 3; // 1
  ```

- **Bitwise OR (|):** Performs a bitwise OR operation.

  ```javascript
  5 | 3; // 7
  ```

- **Bitwise XOR (^):** Performs a bitwise XOR (exclusive OR) operation.

  ```javascript
  5 ^ 3; // 6
  ```

#### 5. Increment vs. Decrement Operators
Increment and decrement operators are used to increase or decrease the value of a variable.

- **Increment (++):** Increases the value of a variable by 1.

  ```javascript
  let x = 5;
  x++; // x is now 6
  ```

- **Decrement (--):** Decreases the value of a variable by 1.

  ```javascript
  let y = 10;
  y--; // y is now 9
  ```

#### 6. Assignment Operators
Assignment operators are used to assign values to variables.

- **Assignment (=):** Assigns a value to a variable.

  ```javascript
  let z = 15;
  ```

- **Other Assignment Operators (e.g., +=, -=, *=, /=):** Perform an operation and assign the result to a variable in a single step.

  ```javascript
  let a = 5;
  a += 3; // Equivalent to: a = a + 3; (a is now 8)
  ```

#### 7. Ternary Operator (Conditional Operator)
The ternary operator is a shorthand for an if-else statement. It returns one of two values based on a condition.

```javascript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
```

#### 8. Nullish Coalescing Operator (??)
The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

```javascript
let value = null;
let defaultValue = "Default Value";
let result = value ?? defaultValue;
console.log(result); // "Default Value"
```

### Decision-Making Statements in JavaScript
#### 1. `if` Statement
The `if` statement is used for conditional execution of code. It evaluates a condition and executes a block of code if the condition is true.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if the condition is true
}
```

**Example:**
```javascript
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}
```

#### 2. `if-else` Statement
The `if-else` statement allows you to execute one block of code if a condition is true and another block of code if the condition is false.

**Syntax:**
```javascript
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

**Example:**
```javascript
let isRaining = true;
if (isRaining) {
    console.log("Bring an umbrella.");
} else {
    console.log("No need for an umbrella.");
}
```

#### 3. Nested `if-else` Statement
You can nest `if-else` statements inside each other to handle more complex conditions.

**Syntax:**
```javascript
if (condition1) {
    // Code to execute if condition1 is true
    if (condition2) {
        // Code to execute if condition2 is true
    } else {
        // Code to execute if condition2 is false
    }
} else {
    // Code to execute if condition1 is false
}
```

**Example:**
```javascript
let score = 75;
if (score >= 60) {
    console.log("You passed.");
    if (score >= 90) {
        console.log("You got an A grade!");
    } else {
        console.log("You got a B grade.");
    }
} else {
    console.log("You failed.");
}
```

#### 4. Cascaded `if-else` Statement
A cascaded `if-else` statement is used when you have multiple conditions to check one after the other.

**Syntax:**
```javascript
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else if (condition3) {
    // Code to execute if condition3 is true
} else {
    // Code to execute if none of the conditions are true
}
```

**Example:**
```javascript
let grade = 'B';
if (grade === 'A') {
    console.log("Excellent!");
} else if (grade === 'B') {
    console.log("Good job!");
} else if (grade === 'C') {
    console.log("You can do better.");
} else {
    console.log("Needs improvement.");
}
```

#### 5. `switch-case` Statement
The `switch-case` statement is used to select one of many code blocks to be executed.

**Syntax:**
```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    // More cases...
    default:
        // Code to execute if none of the cases match
}
```

**Example:**
```javascript
let dayOfWeek = 'Monday';
switch (dayOfWeek) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Friday':
        console.log("Weekend is almost here!");
        break;
    default:
        console.log("It's a weekday.");
}
```

### 1. `break` Statement

The `break` statement is used to exit a loop prematurely when a certain condition is met. It is commonly used to terminate a loop early, preventing further iterations.

**Example: Using `break` in a `for` loop**

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}
```

In this example, the loop runs from 1 to 10, but when `i` becomes equal to 5, the `break` statement is executed, and the loop terminates. So, only the numbers 1 through 4 are printed.

### 2. `continue` Statement

The `continue` statement is used to skip the current iteration of a loop and proceed to the next iteration. It allows you to skip over specific values or conditions without terminating the loop entirely.

**Example: Using `continue` in a `for` loop**

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i equals 3
    }
    console.log(i);
}
```

In this example, when `i` is equal to 3, the `continue` statement is executed, and the loop proceeds to the next iteration. As a result, the number 3 is skipped in the output, and the loop continues to print 1, 2, 4, and 5.


### JavaScript Math functions

### 1. `Math.abs(x)`

- **Description:** Returns the absolute (positive) value of a number.

- **Example:**
   ```javascript
   let num = -5;
   let absoluteValue = Math.abs(num); // absoluteValue is 5
   ```

### 2. `Math.round(x)`

- **Description:** Rounds a number to the nearest integer.

- **Example:**
   ```javascript
   let num = 5.49;
   let rounded = Math.round(num); // rounded is 5
   ```

### 3. `Math.ceil(x)`

- **Description:** Rounds a number up to the nearest integer.

- **Example:**
   ```javascript
   let num = 5.01;
   let roundedUp = Math.ceil(num); // roundedUp is 6
   ```

### 4. `Math.floor(x)`

- **Description:** Rounds a number down to the nearest integer.

- **Example:**
   ```javascript
   let num = 5.99;
   let roundedDown = Math.floor(num); // roundedDown is 5
   ```

### 5. `Math.random()`

- **Description:** Generates a random decimal number between 0 (inclusive) and 1 (exclusive).

- **Example:**
   ```javascript
   let randomNumber = Math.random(); // Generates a random number between 0 and 1 (e.g., 0.123456)
   ```

### 6. `Math.max(x, y, z, ...)`

- **Description:** Returns the largest of zero or more numbers.

- **Example:**
   ```javascript
   let maxNumber = Math.max(10, 5, 20, 8); // maxNumber is 20
   ```

### 7. `Math.min(x, y, z, ...)`

- **Description:** Returns the smallest of zero or more numbers.

- **Example:**
   ```javascript
   let minNumber = Math.min(10, 5, 20, 8); // minNumber is 5
   ```

### 8. `Math.pow(x, y)`

- **Description:** Returns the value of x to the power of y.

- **Example:**
   ```javascript
   let result = Math.pow(2, 3); // result is 8 (2^3 = 8)
   ```

### 9. `Math.sqrt(x)`

- **Description:** Returns the square root of a number.

- **Example:**
   ```javascript
   let squareRoot = Math.sqrt(25); // squareRoot is 5 (√25 = 5)
   ```

### 10. `Math.PI`

- **Description:** A predefined constant representing the mathematical constant π (pi).

- **Example:**
   ```javascript
   let circleArea = Math.PI * Math.pow(5, 2); // Calculates the area of a circle with radius 5
   ```
### 11. `Math.trunc(x)`

- **Description:** Returns the integer part of a number by removing the fractional part, effectively truncating the decimal portion.

- **Example:**
   ```javascript
   let num = 5.78;
   let truncated = Math.trunc(num); // truncated is 5
   ```


### JavaScript Arrays

#### 1. JavaScript Arrays

Arrays in JavaScript are ordered collections of values under one variable name, where each value is assigned a unique index or we can access those values or elements using index no. and generally the index number starts from 0. 
They are versatile and commonly used to store and manipulate multiple data elements.

**Syntax of Creating an Array:**
```javascript
let fruits = ["apple", "banana", "cherry"];
```

**Accessing Elements:**
You can access elements in an array using square brackets and the index of the element.

```javascript
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
```

**Length Attribute:**
The `length` property of an array returns the number of elements in the array.

```javascript
console.log(fruits.length); // 3
```

**display the array elements:**

```javascript
let arr = [1,2,3,4,5,6]
for(i=0;i<arr.length;i++){
  console.log(arr[i]);
}
```
**find out all the even numbers from an array:**

```javascript
let arr = [1,2,3,4,5,6]
for(i=0;i<arr.length;i++){
  if(arr[i]%2===0)
  console.log(arr[i]);
}
```

**Add 3 to each element in an array:**

```javascript
let arr = [1,2,3,4,5,6]
for(i=0;i<arr.length;i++){
  arr[i]=arr[i]+3;
  console.log(arr[i]);
}
```

**Find out the maximum element in an array:**

```javascript
let arr = [4,5,8,2,7,1]
let max=arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
```

**Sort the numbers in an array:**

```javascript
let arr = [4,5,8,2,7,1];
let c=0;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            c=arr[i];
            arr[i]=arr[j];
            arr[j]=c;
        }
    }
    console.log(arr[i]);
}
```

**Reverse the numbers in an array:**

```javascript
let arr = [1,2,3,4,5]
let s=0;
let e=arr.length-1;

while(s<e){
    let temp = arr[s];
    arr[s]=arr[e];
    arr[e]=temp;
    s++;
    e--;
}
console.log(arr);
```

**Multidimensional Array:**
JavaScript arrays can also hold other arrays, creating multidimensional arrays.

```javascript
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][2]); // Accesses the element 6
```


### Creating a Multidimensional Array

To create a multidimensional array, you can nest arrays within arrays. Here's an example of a 2D array (a grid with rows and columns):

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

In this example, `matrix` is a 2D array with three rows and three columns.

### Accessing Elements in a Multidimensional Array

You can access elements in a multidimensional array using multiple pairs of square brackets. The first pair selects the row, and the second pair selects the column:

```javascript
console.log(matrix[0][0]); // Accesses the element in the first row and first column (1)
console.log(matrix[1][2]); // Accesses the element in the second row and third column (6)
```

### Iterating Through a Multidimensional Array

You can use nested loops to iterate through the elements of a multidimensional array. For example, to print all elements in the `matrix`:

```javascript
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

This nested loop structure traverses each row and column, printing all the elements.

### Use Cases of Multidimensional Arrays

Multidimensional arrays are useful in various scenarios, including:

1. **Matrices**: Representing mathematical matrices for operations like matrix multiplication.

2. **Grids**: Storing data in a grid format, such as game boards, spreadsheets, or images (pixels).

3. **Tabular Data**: Storing tabular data with rows and columns, like a database table.

4. **Nested Structures**: Creating hierarchical or nested data structures.

Here are some more examples:

#### Game Board

```javascript
let ticTacToeBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
];
```

#### Student Grades

```javascript
let studentGrades = [
    ['Alice', 95, 88, 92],
    ['Bob', 89, 91, 87],
    ['Carol', 92, 87, 95]
];
```

#### Color Image

```javascript
let imagePixels = [
    ['#FF0000', '#00FF00', '#0000FF'],
    ['#000000', '#FFFFFF', '#808080'],
    ['#FFFF00', '#FF00FF', '#00FFFF']
];
```

#### Calendar

```javascript
let monthlyCalendar = [
    ['Jan', 'Feb', 'Mar'],
    ['Apr', 'May', 'Jun'],
    ['Jul', 'Aug', 'Sep'],
    ['Oct', 'Nov', 'Dec']
];
```


### print first column

```javascript
let firstColumn = [];

for (let i = 0; i < matrix.length; i++) {
    firstColumn.push(matrix[i][0]);
}
console.log(firstColumn)
```


### Transpose the matrix
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let transpose = []
for (let i = 0; i < matrix.length; i++) {
    transpose[i] = []
    console.log(transpose)
    for (let j = 0; j < matrix[i].length; j++) {
        transpose[i][j] = matrix[j][i]; 
    }
}
console.log(transpose)
```
```
output
[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
```

### add all the elements 

```javascript
let sum = 0
 for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        sum=sum+matrix[i][j]
    }
}
console.log(sum)
```


### find out the maximum element 


```javascript
let max=matrix[0][0]
 for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j]>max)
        max=matrix[i][j];
    }
}
console.log(max)
```



### The Matrices

You have two matrices, `matrixA` and `matrixB`:

**Matrix A:**
```
1  2
3  4
```

**Matrix B:**
```
5  6
7  8
```

### Resultant Matrix (Product Matrix)

The goal is to find the product of these two matrices, which will result in a new matrix:

**Product Matrix (Result):**

```
19  22
43  50
```

### How Matrix Multiplication Works

Matrix multiplication involves multiplying each element of a row in the first matrix by each element in a corresponding column of the second matrix and summing these products. Here's a step-by-step explanation:

1. To calculate the element in the first row and first column of the product matrix (result[0][0]), you take the dot product of the first row of matrixA and the first column of matrixB:
   - result[0][0] = (1 * 5) + (2 * 7) = 5 + 14 = 19

2. To calculate result[0][1], you continue with the first row of matrixA but use the second column of matrixB:
   - result[0][1] = (1 * 6) + (2 * 8) = 6 + 16 = 22

3. Next, you move to the second row of the product matrix:

   - result[1][0] = (3 * 5) + (4 * 7) = 15 + 28 = 43
   - result[1][1] = (3 * 6) + (4 * 8) = 18 + 32 = 50





#### 2. Array Methods

JavaScript provides various methods to manipulate arrays effectively. Here are some commonly used array methods:

- **`map(callback)`**: Creates a new array by applying a callback function to each element of the original array.

   ```javascript
   let numbers = [1, 2, 3];
   let doubled = numbers.map(x => x * 2); // [2, 4, 6]
   ```

- **`filter(callback)`**: Creates a new array with elements that satisfy a condition defined in the callback function.

   ```javascript
   let scores = [85, 92, 78, 90, 88];
   let highScores = scores.filter(score => score >= 90); // [92, 90]
   ```

- **`reduce(callback)`**: Applies a callback function to reduce an array to a single value (e.g., summing all elements).

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let sum = numbers.reduce((acc, current) => acc + current, 0); // 15
   ```

- **`indexOf(element)`**: Returns the first index at which a specified element is found in the array. Returns -1 if the element is not found.

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   let index = fruits.indexOf("banana"); // 1
   ```

- **`push(element)`**: Adds an element to the end of the array and returns the new length of the array.

   ```javascript
   let fruits = ["apple", "banana"];
   let newLength = fruits.push("cherry"); // 3
   ```

- **`pop()`**: Removes the last element from the array and returns that element.

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   let removed = fruits.pop(); // "cherry"
   ```

- **`shift()`**: Removes the first element from the array and returns that element.

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   let removed = fruits.shift(); // "apple"
   ```

- **`unshift(element)`**: Adds one or more elements to the beginning of the array and returns the new length.

   ```javascript
   let fruits = ["banana", "cherry"];
   let newLength = fruits.unshift("apple"); // 3
   ```

- **`slice(start, end)`**: Returns a new array containing elements from the original array within the specified range (from `start` to `end`, not inclusive).

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let sliced = numbers.slice(1, 4); // [2, 3, 4]
   ```

- **`some(callback)`**: Checks if at least one element in the array satisfies the condition specified in the callback function. Returns `true` if any element meets the condition; otherwise, `false`.

   ```javascript
   let numbers = [1, 3, 5, 7, 9];
   let hasEven = numbers.some(x => x % 2 === 0); // false
   ```

- **`every(callback)`**: Checks if all elements in the array satisfy the condition specified in the callback function. Returns `true` if all elements meet the condition; otherwise, `false`.

   ```javascript
   let numbers = [2, 4, 6, 8, 10];
   let allEven = numbers.every(x => x % 2 === 0); // true
   ```

- **`concat(array)`**: Combines the current array with another array(s) and returns a new concatenated array.

   ```javascript
   let fruits1 = ["apple", "banana"];
   let fruits2 = ["cherry", "orange"];
   let combined = fruits1.concat(fruits2); // ["apple", "banana", "cherry", "orange"]
   ```

- **`splice(start, deleteCount, item1, item2, ...)`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   fruits.splice(1, 1, "orange", "grape"); // Removes "banana" and adds "orange" and "grape"
   ```

- **`reverse()`**: Reverses the order of elements in the array.

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   numbers.reverse(); // [5, 4, 3, 2, 1]
   ```
- **`includes()`**: determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  ```javascript
  const array1 = [1, 2, 3];
  console.log(array1.includes(2));
  
  const pets = ['cat', 'dog', 'bat'];
  console.log(pets.includes('cat'));
  console.log(pets.includes('at'));
  ```

### 1. JavaScript Strings

#### JavaScript Strings
- Strings in JavaScript are sequences of characters, such as letters, numbers, symbols, or spaces.
- They are defined using single (''), double ("") or backticks (``) quotes.

**Syntax:**
```javascript
let singleQuotes = 'This is a string.';
let doubleQuotes = "This is another string.";
let backticks = `And this is a string using backticks.`;
```

#### Length Attribute
- The `length` attribute of a string returns the number of characters in the string.
- It is useful for determining the size of a string.

**Example:**
```javascript
let message = "Hello, world!";
let length = message.length; // length is 13
```

**find out all the characters in a string :**

```javascript
var str = "Hello";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

**reverse a string :**

```javascript
var str = "Hello";
let rev="";
for (var i = str.length-1; i >=0; i--) {
  rev+=str[i];
}
console.log(rev);
```

**retrive a string from a given string :**

```javascript
var str = "The quick brown fox jumps over the lazy dog";
var result = "";
var startIndex = str.indexOf("fox");
console.log(startIndex)
if (startIndex !== -1) {
  var endIndex = startIndex + 3;
  for (var i = startIndex; i < endIndex; i++) {
    result += str[i];
  }
}
console.log(result);
```


#### Escape Character
Because strings must be written within quotes, JavaScript will misunderstand this string:

```javascript
let text = "We are the so-called "Vikings" from the north.";
console.log(text);
```
```javascript
let text = "We are the so-called \"Vikings\" from the north.";
```

### 2. String Methods

#### slice(start, end)
- The `slice()` method extracts a section of a string and returns it as a new string.
- It takes two arguments: `start` (inclusive) and `end` (exclusive) positions.

**Example:**
```javascript
let str = "JavaScript is fun!";
let sliced = str.slice(0, 10); // sliced is "JavaScript"
```

#### substring(start, end)
- The `substring()` method is similar to `slice()` but does not accept negative indices.
- It also extracts a section of a string based on `start` (inclusive) and `end` (exclusive).

**Example:**
```javascript
let str = "JavaScript is amazing!";
let sub = str.substring(11, 17); // sub is "amazin"
```

#### indexOf()
- The `indexOf()` method of String values searches this string and returns the index of the 
first occurrence of the specified substring.

```javascript
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst);
```


#### substr(start, length)
- The `substr()` method extracts a specified number of characters from a string.
- It takes `start` (inclusive) and the `length` of the substring.

**Example:**
```javascript
let str = "OpenAI is innovative!";
let sub = str.substr(8, 2); // sub is "is"
```

#### replace(search, replacement)
- The `replace()` method replaces the first occurrence of a specified substring with another substring.
- It takes `search` string and the `replacement` string as arguments.

**Example:**
```javascript
let sentence = "I love JavaScript. JavaScript is powerful.";
let newSentence = sentence.replace("JavaScript", "Node.js");
// newSentence is "I love Node.js. JavaScript is powerful."
```

#### replaceAll(search, replacement)
- The `replaceAll()` method replaces all occurrences of a specified substring with another substring.
- It takes `search` string and the `replacement` string as arguments.

**Example:**
```javascript
let sentence = "I love JavaScript. JavaScript is powerful.";
let newSentence = sentence.replaceAll("JavaScript", "Node.js");
// newSentence is "I love Node.js. Node.js is powerful."
```

#### toUpperCase() and toLowerCase()
- `toUpperCase()` and `toLowerCase()` are used to convert a string to all uppercase or all lowercase characters, respectively.

**Example:**
```javascript
let name = "John Doe";
let upperCaseName = name.toUpperCase(); // "JOHN DOE"
let lowerCaseName = name.toLowerCase(); // "john doe"
```

#### concat(string1, string2, ...)
- The `concat()` method is used to join two or more strings.
- It combines the original string with other strings and returns a new string.

**Example:**
```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName); // "John Doe"
```

#### trim()
- The `trim()` method removes whitespace (spaces, tabs, line breaks) from both ends of a string.

**Example:**
```javascript
let sentence = "   This is a sentence with spaces.   ";
let trimmed = sentence.trim(); // "This is a sentence with spaces."
```

#### charAt(index) and charCodeAt(index)
- `charAt(index)` returns the character at the specified index in a string.
- `charCodeAt(index)` returns the Unicode value of the character at the specified index.

**Example:**
```javascript
let word = "Hello";
let char = word.charAt(1); // "e"
let charCode = word.charCodeAt(1); // 101 (Unicode value of "e")
```

#### split(separator)
- The `split()` method splits a string into an array of substrings based on a specified separator.
- It's useful for breaking a string into parts.

**Example:**
```javascript
let sentence = "I,am,a,comma,separated,sentence";
let words = sentence.split(","); // ["I", "am", "a", "comma", "separated", "sentence"]
```



### Types of Functions in JavaScript

JavaScript supports various types of functions, each with its own syntax and use cases. Understanding these functions is essential for writing effective JavaScript code. Here is a detailed explanation of each type:

### 1. Regular Function

**Definition:** Regular functions are the most common type of functions in JavaScript. They are defined using the `function` keyword.

**Syntax:**
```javascript
function functionName(parameters) {
    // function body
}
```

**Example:**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
```

**Use Cases:** Regular functions are used for most function definitions, including event handlers, methods in objects, and general-purpose functions.

### 2. Arrow Function

**Definition:** Arrow functions provide a shorter syntax for writing functions. They do not have their own `this` context; instead, they inherit `this` from the parent scope.

**Syntax:**
```javascript
const functionName = (parameters) => {
    // function body
};
```

**Example:**
```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Bob")); // Hello, Bob!
```

**Use Cases:** Arrow functions are often used for concise function expressions, especially for callbacks and functional programming.

**Difference between Regular Function and Arrow Function:**
- **Syntax:** Arrow functions have a more concise syntax.
- **`this` Binding:** Arrow functions do not have their own `this`; they inherit `this` from the parent scope, whereas regular functions have their own `this`.
- **Usage:** Arrow functions are preferred in scenarios where `this` should not change, such as callbacks and functional programming.

### 3. Anonymous Function

**Definition:** Anonymous functions are functions without a name. They are often used as arguments to other functions or assigned to variables.

**Syntax:**
```javascript
function(parameter) {
    // function body
}
```

**Example:**
```javascript
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);
```

**Use Cases:** Anonymous functions are commonly used as callbacks, event handlers, or immediate invocations.

### 4. Function Expression

**Definition:** Function expressions involve defining a function and assigning it to a variable. They can be named or anonymous.

**Syntax:**
```javascript
const functionName = function(parameters) {
    // function body
};
```

**Example:**
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Charlie")); // Hello, Charlie!
```

**Use Cases:** Function expressions are used when a function needs to be assigned to a variable, passed as an argument, or returned from another function.

### 5. Callback Function

**Definition:** A callback function is a function passed as an argument to another function and is executed after some operation has been completed.

**Syntax:**
```javascript
function callback() {
    // function body
}

function mainFunction(callback) {
    // execute callback
    callback();
}
```

**Example:**
```javascript
function logMessage() {
    console.log("This is a callback function.");
}

function executeCallback(callback) {
    callback();
}

executeCallback(logMessage);
```

**Use Cases:** Callback functions are widely used in asynchronous programming, event handling, and functional programming.

### 6. First-Class Function

**Definition:** JavaScript treats functions as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

**Example:**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

const sayHello = greet;
console.log(sayHello("Dave")); // Hello, Dave!
```

**Use Cases:** This property of functions allows for higher-order functions, functional programming, and creating flexible APIs.

### 7. Higher-Order Function

**Definition:** A higher-order function is a function that accepts other functions as arguments or returns a function.

**Syntax:**
```javascript
function higherOrderFunction(callback) {
    // function body
}
```

**Example:**
```javascript
function higherOrderFunction(callback) {
    callback();
}

function logMessage() {
    console.log("This is a higher-order function.");
}

higherOrderFunction(logMessage);
```

**Use Cases:** Higher-order functions are used in functional programming, array methods like `map`, `filter`, and `reduce`.

### 8. Self-Invoking Function (IIFE)

**Definition:** A self-invoking function, also known as an Immediately Invoked Function Expression (IIFE), is a function that is executed immediately after it is defined.

**Syntax:**
```javascript
(function() {
    // function body
})();
```

**Example:**
```javascript
(function() {
    console.log("This is an IIFE.");
})();
```

**Use Cases:** IIFEs are used to create a local scope and avoid polluting the global namespace.

**Difference between Regular Function and Self-Invoking Function:**
- **Invocation:** Regular functions are invoked explicitly, while self-invoking functions are executed immediately.
- **Scope:** Self-invoking functions create a local scope immediately upon execution.

### Detailed Examples

#### Regular Function vs. Arrow Function

```javascript
const person = {
    name: "Alice",
    regularFunction: function() {
        console.log(this.name); // Alice
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (inherits `this` from the global scope)
    }
};

person.regularFunction();
person.arrowFunction();
```

#### Regular Function vs. Self-Invoking Function

```javascript
// Regular Function
function regularFunction() {
    console.log("This is a regular function.");
}

regularFunction(); // This is a regular function.

// Self-Invoking Function (IIFE)
(function() {
    console.log("This is an IIFE.");
})(); // This is an IIFE.
```




### 1. Different Scopes in JavaScript:

**Definition:** Scope refers to the context in which variables are declared and accessed. In JavaScript, there are two main types of scope:

- **Global Scope:** Variables declared outside of any function or block have a global scope. They can be accessed from any part of the code.

  ```javascript
  var globalVariable = "I am global";

  function exampleFunction() {
      console.log(globalVariable); // Accessible inside functions
  }

  console.log(globalVariable); // Accessible globally
  ```

- **Local Scope (Function Scope):** Variables declared within a function have local scope. They are only accessible within that function.

  ```javascript
  function exampleFunction() {
      var localVariable = "I am local";
      console.log(localVariable); // Accessible inside the function
  }

  console.log(localVariable); // Error: localVariable is not defined
  ```

### 2. Scope Chaining:

**Definition:** Scope chaining refers to the ability of a function to access variables from its own scope, the scope of the function it was declared within, and the global scope.

```javascript
var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(innerVar);   // Access innerVar
        console.log(outerVar);   // Access outerVar
        console.log(globalVar);  // Access globalVar
    }

    innerFunction();
    console.log(innerVar);   // Error: innerVar is not defined
}

outerFunction();
console.log(outerVar);   // Error: outerVar is not defined
```

### 3. Shadowing:

**Definition:** Shadowing occurs when a variable declared within a local scope has the same name as a variable in an outer scope. The inner variable "shadows" the outer one within its scope.

```javascript
var outerVar = "I am outer";

function exampleFunction() {
    var innerVar = "I am inner";
    console.log(innerVar);   // Access innerVar
    console.log(outerVar);   // Access outerVar from the outer scope

    var outerVar = "I am inner's shadow"; // This shadows the outerVar
    console.log(outerVar);   // Access the innerVar's shadow
}

exampleFunction();
```

Shadowing in JavaScript occurs when a variable declared within a local scope has the same name as a variable in an outer scope, effectively "shadowing" the outer variable within its scope. While shadowing can be a source of confusion and bugs if used carelessly, there are situations where it can be intentionally employed for specific purposes. Here are some use cases for shadowing:

1. **Local Variable Modification:**
   - Shadowing can be used when you want to modify the value of a variable within a specific scope without affecting the outer variable.

    ```javascript
    var count = 10;

    function updateCount() {
        var count = 20; // Shadowing the outer 'count'
        console.log(count); // Outputs 20
    }

    updateCount();
    console.log(count); // Outputs 10 (outer 'count' remains unchanged)
    ```

   In this case, the inner function has its own `count` variable that shadows the outer `count`, allowing modification within its scope.

2. **Parameter Shadowing:**
   - Function parameters can shadow variables with the same name in outer scopes. This is a common practice and is not considered problematic.

    ```javascript
    var x = 5;

    function addX(x) {
        return x + 10; // 'x' here shadows the outer 'x'
    }

    console.log(addX(3)); // Outputs 13 (inner 'x' is used as a parameter)
    ```

3. **Nested Function Definitions:**
   - When functions are defined within other functions, shadowing can be used to create isolated scopes for variables. This is often seen in closures.

    ```javascript
    function outerFunction() {
        var message = "Hello from outer";

        function innerFunction() {
            var message = "Hello from inner"; // Shadowing 'message' from outer scope
            console.log(message); // Outputs "Hello from inner"
        }

        innerFunction();
        console.log(message); // Outputs "Hello from outer"
    }

    outerFunction();
    ```

   In this example, the inner function has its own `message` variable, which shadows the `message` from the outer scope.

4. **Avoiding Global Scope Pollution:**
   - Shadowing can be used to avoid unintentional pollution of the global scope by reusing variable names within a function, preventing unintended interactions with global variables.

    ```javascript
    var data = "Global data";

    function processData(data) {
        // 'data' parameter shadows the global 'data'
        console.log(data); // Outputs the function parameter
    }

    processData("Local data");
    ```

   In this case, the local `data` parameter shadows the global `data`, providing a clear separation between local and global contexts.


### 4. Closures:

**Definition:** A closure is a function that has access to variables from its own scope, the scope of the function it was declared within, and the global scope. Closures allow for the preservation of the outer function's state even after the outer function has finished executing.

```javascript
function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";
        console.log(outerVar);   // Access outerVar from the outer scope
        console.log(innerVar);   // Access innerVar
    }

    return innerFunction; // Return the inner function (closure)
}

var closure = outerFunction();
closure(); // Executes innerFunction with access to outerVar and innerVar
```

In this example, `innerFunction` is returned from `outerFunction` and assigned to `closure`. Even though `outerFunction` has finished executing, `closure` still has access to `outerVar` due to the closure mechanism.

Understanding these concepts is crucial for writing efficient and maintainable JavaScript code.


Scope chaining and closures are related concepts in JavaScript, but they are not exactly the same. Let's clarify the difference between them:

### Scope Chaining:

- **Definition:** Scope chaining refers to the process by which a function can access variables not only within its own scope but also in the outer scopes in which it was defined.

- **Mechanism:** When a function is invoked, JavaScript looks for variables in its local scope. If a variable is not found, it looks in the outer (enclosing) scope. This process continues until the variable is found or the global scope is reached.

- **Example:**

  ```javascript
  var globalVar = "I am global";

  function outerFunction() {
      var outerVar = "I am outer";

      function innerFunction() {
          console.log(innerVar);   // Access innerVar
          console.log(outerVar);   // Access outerVar from the outer scope
          console.log(globalVar);  // Access globalVar
      }

      innerFunction();
  }

  outerFunction();
  ```

### Closures:

- **Definition:** A closure is a function that "closes over" variables from its outer scope, preserving access to those variables even after the outer function has finished executing.

- **Mechanism:** A closure is created when a function is defined inside another function, and the inner function references variables from the outer function. The inner function maintains a reference to the outer function's variables, creating a closure.

- **Example:**

  ```javascript
  function outerFunction() {
      var outerVar = "I am outer";

      function innerFunction() {
          console.log(outerVar);  // Access outerVar from the closure
      }

      return innerFunction; // Return the inner function (closure)
  }

  var closure = outerFunction();
  closure(); // Executes innerFunction with access to outerVar from the closure
  ```

### Key Difference:

- **Scope chaining** is the mechanism that allows a function to access variables in its lexical scope chain, while **closures** are the result of a function having access to variables from its outer scope even after the outer function has finished executing.

- **Closure is a concept that involves scope chaining but is not limited to it.** A closure is formed when a function retains access to variables from its outer scope, creating a closure even if it doesn't explicitly reference variables from the outer scope in its code.


## 1. Class and Inheritance in JavaScript:

**Class in JavaScript:**

- **Definition:** A class is a blueprint for creating objects with a predefined structure and behavior. It encapsulates data (properties) and functions (methods) that operate on that data.

- **Syntax:**
  ```javascript
  class ClassName {
      constructor(parameters) {
          // constructor code
      }

      method1() {
          // method1 code
      }

      method2() {
          // method2 code
      }
  }
  ```

- **Example:**
  ```javascript
  class Animal {
      constructor(name) {
          this.name = name;
      }

      speak() {
          console.log(`${this.name} makes a sound.`);
      }
  }

  const dog = new Animal('Dog');
  dog.speak(); // Output: Dog makes a sound.
  ```

**Inheritance in JavaScript:**

- **Definition:** Inheritance is a mechanism that allows a class (subclass/derived class) to inherit properties and methods from another class (superclass/base class).

- **Syntax:**
  ```javascript
  class Subclass extends Superclass {
      constructor(parameters) {
          super(parameters); // Call the superclass constructor
          // subclass constructor code
      }

      // additional methods specific to the subclass
  }
  ```

- **Example:**
  ```javascript
  class Bird extends Animal {
      constructor(name, wingspan) {
          super(name); // Call the superclass constructor
          this.wingspan = wingspan;
      }

      fly() {
          console.log(`${this.name} is flying with a wingspan of ${this.wingspan} cm.`);
      }
  }

  const eagle = new Bird('Eagle', 200);
  eagle.speak(); // Output: Eagle makes a sound.
  eagle.fly();   // Output: Eagle is flying with a wingspan of 200 cm.
  ```

**First-Class Functions:**

In programming languages, a language is said to have first-class functions if functions are treated as first-class citizens. This means functions can be:

1. Assigned to variables.
2. Passed as arguments to other functions.
3. Returned from other functions.

**Example of First-Class Functions:**

```javascript
// Function assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Function passed as an argument to another function
function processGreeting(greeterFunction, name) {
    return greeterFunction(name);
}

// Function returned from another function
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

// Using first-class functions
const result1 = processGreeting(greet, "John");
console.log(result1); // Output: Hello, John!

const customGreeter = createGreeter("Hi");
const result2 = customGreeter("Alice");
console.log(result2); // Output: Hi, Alice!
```

**High-Order Functions:**

A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

**Example of High-Order Functions:**

```javascript
// Higher-order function taking a function as an argument
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Higher-order function returning a function
function greeterFactory(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = greeterFactory("Hello");
const sayHi = greeterFactory("Hi");

console.log(sayHello("Tom")); // Output: Hello, Tom!
console.log(sayHi("Jerry"));  // Output: Hi, Jerry!
```

**Key Differences:**

1. **First-Class Functions:**
   - Refers to the treatment of functions as first-class citizens.
   - Allows functions to be assigned to variables, passed as arguments, and returned from other functions.
   - It's more about the characteristics of functions in a language.

2. **High-Order Functions:**
   - Refers to functions that operate on other functions by taking them as arguments or returning them.
   - It's more about the behavior or capability of functions to operate on functions.

```javascript
function marker(func) {
    return function(a, b) {
        console.log("======");
        func(a, b);
        console.log("======");
    };
}
function sum(a, b) {
    console.log(a + b);
}
const wrap = marker(sum);
wrap(2, 3); // Now you can call wrap, which in turn calls sum with the wrapping behavior
```


## JavaScript Objects

### Definition

- **Objects** are one of the fundamental data structures in JavaScript.
- They are collections of **key-value pairs** where each key is a **string** (or a **symbol**) and each value can be of any data type, including other objects.

### Syntax

- Objects are defined using **curly braces `{}`**.
- Key-value pairs are separated by **colons**, and pairs are separated by **commas**.

**Example:**
```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

In the user object, there are two properties:

The first property has the name "name" and the value "John".
The second one has the name "age" and the value 30.

console.log(user.name)//John


### Why Use Objects

1. **Structure and Organization**: Objects allow you to group related data and functions together, providing a way to structure your code.

2. **Easy Access**: You can access properties and methods using their names (keys), making it easy to retrieve or modify data.

3. **Flexibility**: Objects can store data of different types and can be modified dynamically, making them versatile for various use cases.

### Key Concepts

1. **Properties**: Keys in an object are called **properties**, and their corresponding values can be of any data type.

2. **Methods**: Functions within an object are known as **methods**. They allow objects to encapsulate behavior.

3. **Accessing Properties and Methods**: Use dot notation (`object.property`) or bracket notation (`object['property']`) to access object members.

**Example:**
```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    },
};

console.log(person.name);        // "John"
console.log(person.greet());     // "Hello, my name is John."
```

### Where to Use Objects

1. **Modeling Real-World Entities**: Objects are suitable for modeling real-world entities, like users, products, or vehicles, where you can represent properties and actions.

2. **Configuration**: Objects are used to store configuration settings for applications.

3. **Data Structures**: Objects are often used as data structures for organizing, storing, and retrieving data efficiently.

### Object Creation

1. **Object Literals**: The most common way to create an object is by defining it using object literals, as shown in the syntax example.

2. **Using the `new` Operator**: You can create objects from constructor functions using the `new` operator.

3. **Object.create()**: You can create objects with a specific prototype using the `Object.create()` method.

### Object Methods

1. **Adding Methods**: You can add methods to an object by assigning function expressions to its properties.

2. **this Keyword**: The `this` keyword refers to the object itself and is often used to access its own properties and methods.

### Object Properties

1. **Accessing Properties**: Use dot notation (`object.property`) or bracket notation (`object['property']`) to access object properties.

2. **Adding and Modifying Properties**: You can add or modify properties by simply assigning values to them.

3. **Deleting Properties**: The `delete` keyword can be used to remove properties from an object.

### Object Iteration

1. **for...in Loop**: You can use a `for...in` loop to iterate over an object's properties and perform actions on them.

**Example:**
```javascript
for (let key in person) {
    console.log(key, person[key]);
}
```

### Summary

- Objects are a fundamental data structure in JavaScript.
- They are used to group related data and functions together for better organization and ease of access.
- Objects are versatile and flexible, making them suitable for a wide range of use cases.


### 1. `Object.keys(obj)`

- **Description:** Returns an array containing the object's own enumerable property names (keys).

**Example:**
```javascript
const person = {
    name: "Alice",
    age: 28,
    job: "Engineer"
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "job"]
```

### 2. `Object.values(obj)`

- **Description:** Returns an array containing the object's own enumerable property values.

**Example:**
```javascript
const person = {
    name: "Bob",
    age: 35,
    job: "Designer"
};

const values = Object.values(person);
console.log(values); // ["Bob", 35, "Designer"]
```

### 3. `Object.entries(obj)`

- **Description:** Returns an array of the object's own enumerable property key-value pairs as arrays.

**Example:**
```javascript
const person = {
    name: "Carol",
    age: 42,
    job: "Teacher"
};

const entries = Object.entries(person);
console.log(entries);
// [
//     ["name", "Carol"],
//     ["age", 42],
//     ["job", "Teacher"]
// ]
```

### 4. `Object.assign(target, source1, source2, ...)`

- **Description:** Copies the values of all enumerable own properties of one or more source objects to a target object. It returns the modified target object.

**Example:**
```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const merged = Object.assign(target, source);
console.log(merged); // { a: 1, b: 3, c: 4 }
```

### 5. `Object.create(proto)`

- **Description:** Creates a new object with the specified prototype object.

**Example:**
```javascript
const parent = {
    greet: function() {
        console.log("Hello!");
    }
};

const child = Object.create(parent);
child.greet(); // "Hello!"
```

### 6. `Object.defineProperty(obj, prop, descriptor)`

- **Description:** Adds a new property to an object or modifies an existing property's attributes.

**Example:**
```javascript
const person = {};

Object.defineProperty(person, 'name', {
    value: "David",
    writable: false
});

console.log(person.name); // "David"
person.name = "Eva"; // This assignment will be ignored.
console.log(person.name); // "David"
```

### 7. `Object.freeze(obj)`

- **Description:** Freezes an object, preventing new properties from being added, existing properties from being removed, and the values of existing properties from being changed.

**Example:**
```javascript
const car = { make: "Toyota", model: "Camry" };
Object.freeze(car);

car.color = "Blue"; // This property addition is ignored.
console.log(car.color); // undefined
```

### 8. `Object.seal(obj)`

- **Description:** Seals an object, preventing new properties from being added and existing properties from being removed.

**Example:**
```javascript
const laptop = { brand: "Dell", model: "XPS" };
Object.seal(laptop);

laptop.price = 1000; // This property addition is ignored.
delete laptop.model; // This property deletion is ignored.
console.log(laptop); // { brand: "Dell", model: "XPS" }
```

These are just a few of the many methods and functionalities provided by JavaScript objects. Objects are powerful data structures that allow you to work with and manipulate data in a flexible and versatile way. Understanding these methods and how to use them is crucial for JavaScript development.



### 9. `Object.getOwnPropertyNames(obj)`

- **Description:** Returns an array containing all the names of an object's own enumerable and non-enumerable properties.

**Example:**
```javascript
const person = {
    name: "Eve",
    age: 25,
    [Symbol('id')]: 'unique'
};

const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // ["name", "age"]
```

### 10. `Object.getOwnPropertyDescriptor(obj, prop)`

- **Description:** Returns an object describing the property's attributes (configurable, enumerable, value, writable, get, set).

**Example:**
```javascript
const person = {
    name: "Frank",
    age: 30
};

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// {
//     value: "Frank",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
```

### 11. `Object.is(obj1, obj2)`

- **Description:** Compares two values for strict equality (e.g., NaN is considered equal to NaN).

**Example:**
```javascript
console.log(Object.is(5, 5));     // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false
```

### 13. `Object.getOwnPropertySymbols(obj)`

- **Description:** Returns an array of an object's own symbol properties.

**Example:**
```javascript
const person = {
    [Symbol('id')]: 'unique',
    [Symbol('code')]: '12345'
};

const symbols = Object.getOwnPropertySymbols(person);
console.log(symbols); // [Symbol(id), Symbol(code)]
```

### 14. `Object.entries(obj)`

- **Description:** Returns an array of an object's own enumerable property `[key, value]` pairs as arrays.

**Example:**
```javascript
const person = {
    name: "Hannah",
    age: 40,
    job: "Engineer"
};

const entries = Object.entries(person);
console.log(entries);
// [
//     ["name", "Hannah"],
//     ["age", 40],
//     ["job", "Engineer"]
// ]
```

### 15. `Object.values(obj)`

- **Description:** Returns an array containing an object's own enumerable property values.

**Example:**
```javascript
const person = {
    name: "Isaac",
    age: 45,
    job: "Artist"
};

const values = Object.values(person);
console.log(values); // ["Isaac", 45, "Artist"]
```


## call,apply,bind methods:

- We are using these 3 methods to invoke the functions but the advantages are when we use these approaches then we dont have to define the object name as a parameter or we dont have to take the variable to access the object. 

**`Normal method`**
```javascript
let obj = {
   name:"Raj",
   age:24
}
function demo(a){
   console.log(a.name,a.age)
}
demo(obj)
```

**`After applying call`**

```javascript
let obj = {
   name:"Raj",
   age:24
}
function demo(){
   console.log(this.name,this.age)
}
demo.call(obj)
```
```
`this` keyword refers to the particular object.
```

### Differences between call,apply,bind:

- call : In case of call each and every argument which is required to passed to the function will be passed individually. 


```javascript
let obj = {
   name:"Raj",
   age:24
}
function demo(company,jobrole){
   console.log(this.name,this.age,company,jobrole)
}
demo.call(obj,"Google","Developer")
```
- apply :  In case of call each and every argument which is required to passed to the function will be passed inside an array.

```javascript
let obj = {
   name:"Raj",
   age:24
}
function demo(company,jobrole){
   console.log(this.name,this.age,company,jobrole)
}
demo.apply(obj,["Google","Developer"])
```
- bind : It will return a new function and this new function can use anytime , anywhere. 

```javascript
let obj = {
   name:"Raj",
   age:24
}
function demo(company,jobrole){
   console.log(this.name,this.age,company,jobrole)
}
const value = demo.bind(obj)
value("Google","Developer");
```

### How to render elements from an array of objects.

An array of objects in JavaScript is a collection where each item is an object. This structure is particularly useful for handling a list of records where each record has the same set of properties. Here’s an example:

```javascript
let users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Chicago" }
];
```

In this example, `users` is an array containing three objects. Each object represents a user with properties `name`, `age`, and `city`.

### Examples of Simple Logic Building Questions

1. **Find a user by name**:
   Write a function to find a user by their name from the array of objects.

   ```javascript
   function findUserByName(users, name) {
     return users.find(user => user.name === name);
   }

   console.log(findUserByName(users, "Bob"));
   // Output: { name: 'Bob', age: 30, city: 'San Francisco' }
   ```

2. **Filter users by age**:
   Write a function to get all users above a certain age.

   ```javascript
   function filterUsersByAge(users, minAge) {
     return users.filter(user => user.age > minAge);
   }

   console.log(filterUsersByAge(users, 28));
   // Output: [{ name: 'Bob', age: 30, city: 'San Francisco' }, { name: 'Charlie', age: 35, city: 'Chicago' }]
   ```

3. **Sort users by age**:
   Write a function to sort the users by age in ascending order.

   ```javascript
   function sortUsersByAge(users) {
     return users.sort((a, b) => a.age - b.age);
   }

   console.log(sortUsersByAge(users));
   // Output: [{ name: 'Alice', age: 25, city: 'New York' }, { name: 'Bob', age: 30, city: 'San Francisco' }, { name: 'Charlie', age: 35, city: 'Chicago' }]
   ```

4. **Get a list of cities**:
   Write a function to extract the list of cities from the array of users.

   ```javascript
   function getCities(users) {
     return users.map(user => user.city);
   }

   console.log(getCities(users));
   // Output: ['New York', 'San Francisco', 'Chicago']
   ```

5. **Calculate the average age**:
   Write a function to calculate the average age of the users.

   ```javascript
   function calculateAverageAge(users) {
     const totalAge = users.reduce((sum, user) => sum + user.age, 0);
     return totalAge / users.length;
   }

   console.log(calculateAverageAge(users));
   // Output: 30
   ```

6. **Add a new user**:
   Write a function to add a new user to the array.

   ```javascript
   function addUser(users, newUser) {
     users.push(newUser);
     return users;
   }

   let newUser = { name: "Dave", age: 28, city: "Los Angeles" };
   console.log(addUser(users, newUser));
   // Output: Updated array with the new user added
   ```

7. **Update a user’s age**:
   Write a function to update the age of a user given their name.

   ```javascript
   function updateUserAge(users, name, newAge) {
     let user = users.find(user => user.name === name);
     if (user) {
       user.age = newAge;
     }
     return users;
   }

   console.log(updateUserAge(users, "Alice", 26));
   // Output: Updated array with Alice's age updated to 26
   ```



## JavaScript Set

### Set Constructor

- **Definition:** A Set is basically a collection of unique values, i.e., one value can occur only once in a Set. If we try to insert a value that is already present in the Set, it is simply ignored. The values stored in a Set can be of any type, whether it is a primitive type or object references.

- **Why should we use :** The benefits of using a Set come down to the optimization and performance benefits. Sets are internally implemented as hash tables or search trees that give us a constant O(1) or O(logN) lookup time in searching an element. Although different browsers or JavaScript engines may implement Set differently, it is always guaranteed to give us time complexity better than O(N).

- So if you are working with a large collection of values and you are only concerned with the unique values, using a Set is your best bet. With that being said, let us look at how we can create Sets in JavaScript and carry out different operations that we can perform on them.

- **Constructor:** `new Set(iterable)` where `iterable` is an optional iterable object (e.g., an array) that provides the initial values for the set.



## Creating a Set

You can create a Set in JavaScript in two ways:

### Creating an Empty Set

You can create an empty Set object using the `new` keyword as follows:

```javascript
const myNewSet = new Set();
```

### Initializing a Set with Values

You can also initialize a Set with values by passing an array to the constructor:

```javascript
const myNewSet = new Set(["here", "are", "are", "some", "values"]);

console.log([...myNewSet]); // ["here", "are", "some", "values"]
```

You can even create a Set of unique characters in a string by passing the string to the Set constructor:

```javascript
const myNewSet = new Set("here");

console.log([...myNewSet]); // ["h", "e", "r"]
```

## Adding Values

To add new values to a Set, you can use the `add()` method on the Set object:

```javascript
const myNewSet = new Set([1, 4, 6]);
myNewSet.add(7); // added
myNewSet.add(1); // already exists in Set, ignored

console.log([...myNewSet]); // [1, 4, 6, 7]
```

## Deleting Values

You can remove a specific value from a Set using the `delete()` method. The method returns `true` if an element is removed and `false` if the element is not found in the Set:

```javascript
const myNewSet = new Set([1, 4, 6]);
console.log(myNewSet.delete(1)); // true
console.log(myNewSet.delete(5)); // false

console.log([...myNewSet]); // [4, 6]
```

## Deleting All Elements

To remove all elements from a Set and make it empty, you can use the `clear()` method:

```javascript
const myNewSet = new Set([1, 4, 6]);
myNewSet.clear();

console.log([...myNewSet]); // []
```

## Checking if a Value Exists

You can check if a value exists in the Set by calling the `has()` method. It returns `true` if the value exists and `false` otherwise:

```javascript
const myNewSet = new Set([1, 4, 6]);
console.log(myNewSet.has(1)); // true
console.log(myNewSet.has(5)); // false
```

## Looping Through Elements

There are a few ways to loop through each element of a Set. You can use the `forEach()` method or a `for...of` loop:

### Using `forEach()`

```javascript
const myNewSet = new Set([1, 4, 6]);
myNewSet.forEach(element => {
  console.log(element); 
});
```

### Using `for...of` Loop

```javascript
const myNewSet = new Set([1, 4, 6]);
for (const element of myNewSet) {
  console.log(element);
}
```

## Checking the Number of Elements

You can view the number of elements present in a Set by using the `size` property:

```javascript
const myNewSet = new Set([1, 4, 6]);
console.log(myNewSet.size); // 3
```

## Converting to Iterator

You can convert a Set to an Iterator by calling the `values()` method on the Set object. This method returns an iterator with all the elements of the Set:

```javascript
const myNewSet = new Set([1, 4, 6]);
const iterator = myNewSet.values();

for (const element of iterator) {
  console.log(element); 
}
```

## Important Methods and Properties

Here are some important methods and properties of Sets:

- `new Set()`: Create a new Set object.
- `add()`: Add a new element to the Set.
- `has()`: Check if an element is present in the Set.
- `delete()`: Delete a specified value from the Set.
- `clear()`: Delete all elements from the Set.
- `forEach()`: Run a specified function for every element of the Set.
- `values()`: Return an Iterator with all the values present in the Set.
- `size`: Property to check the number of elements in the Set.
```


### Common Set Methods

1. `add(value)`: Adds a new element with the specified value to the set. It returns the set itself.
   
   **Example:**
   ```javascript
   const mySet = new Set();
   mySet.add(1).add(2).add(3);
   ```

2. `delete(value)`: Removes an element with the specified value from the set. Returns `true` if the element was in the set and `false` otherwise.

   **Example:**
   ```javascript
   mySet.delete(2); // Removes 2 from the set
   ```

3. `has(value)`: Checks whether an element with the specified value exists in the set. Returns `true` if found, `false` if not.

   **Example:**
   ```javascript
   mySet.has(3); // Returns true
   ```

4. `clear()`: Removes all elements from the set.

   **Example:**
   ```javascript
   mySet.clear(); // Clears the set
   ```

5. `size`: Returns the number of elements in the set.

   **Example:**
   ```javascript
   const setSize = mySet.size; // Returns the size of the set
   ```

### JavaScript Map

### Map Constructor

- **Definition:** A `Map` is another built-in object in JavaScript that allows you to store key-value pairs. It can have keys of any data type.
- **Constructor:** `new Map(iterable)` where `iterable` is an optional iterable object (e.g., an array of key-value pairs) that provides the initial values for the map.

### Common Map Methods

1. `set(key, value)`: Sets the value for the specified key in the map. Returns the map itself.

   **Example:**
   ```javascript
   const myMap = new Map();
   myMap.set("name", "Alice").set("age", 28);
   ```

2. `get(key)`: Returns the value associated with the specified key, or `undefined` if the key is not found.

   **Example:**
   ```javascript
   const name = myMap.get("name"); // Returns "Alice"
   ```

3. `delete(key)`: Removes the key-value pair with the specified key from the map. Returns `true` if the key was found and removed, `false` otherwise.

   **Example:**
   ```javascript
   myMap.delete("age"); // Removes the key "age" and its associated value
   ```

4. `has(key)`: Checks whether a key exists in the map. Returns `true` if found, `false` if not.

   **Example:**
   ```javascript
   myMap.has("name"); // Returns true
   ```

5. `clear()`: Removes all key-value pairs from the map.

   **Example:**
   ```javascript
   myMap.clear(); // Clears the map
   ```

6. `size`: Returns the number of key-value pairs in the map.

   **Example:**
   ```javascript
   const mapSize = myMap.size; // Returns the size of the map
   ```



