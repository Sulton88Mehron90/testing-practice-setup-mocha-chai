// function createBox(height, width) {
//   var box = {
//     height: height || 100,
//     width: width || 100
//     }
//   return box
// };
  
function createBox(height = 100, width = 100) {
  return { height, width };
};
  
function calculateArea(box) {
    return box.height * box.width;;  
};

// function increaseWidth(box, value) {
//     return { ...box, width: box.width + value };
// };
  
//   function increaseHeight(box, value) {
//     return { ...box, height: box.height + value };
// };
  
  //The { ...box, height: box.height + value } syntax is part of modern JavaScript (often called ES6 or ES2015), not specific to any library or framework like React. This pattern is commonly used in JavaScript applications to maintain immutability, i.e., not modifying existing objects, but creating new ones with updated properties.

// ...box: This is called the spread operator. It's used here to copy all properties from the box object into a new object.

// height: box.height + value: This is creating or updating the height property in the new object. It takes the current height value of the box object and adds the value.

// The result is a new object with all the same properties as the original box object, but with an updated height value. This leaves the original box object unchanged.

// For example, if you have:

// let box = { height: 50, width: 70 };
// let value = 10;

//Then, this line:


// let newBox = { ...box, height: box.height + value };

// Would result in newBox being a new object with the value { height: 60, width: 70 }, while the original box object remains unchanged ({ height: 50, width: 70 }).

function increment(box, value, dimension) {
    return { ...box, [dimension]: box[dimension] + value };
};

//The increment function takes in a box, a value, and a dimension. The dimension argument should be a string, either "width" or "height". The function creates a new object with all the properties of the box object, but with the specified dimension increased by the provided value.

// The syntax [dimension] in the new object literal is called a computed property name. When an expression (in square brackets) is used in an object property name, the expression is computed, and the result is used as the property name. In this case, if dimension is "width", then [dimension]: box[dimension] + value would be equivalent to width: box.width + value. If dimension is "height", it would be equivalent to height: box.height + value.


//   module.exports = { createBox, calculateArea, increment, increaseWidth, increaseHeight };
  module.exports = { createBox, calculateArea, increment};

  














// module.exports = { createBox, calculateArea };