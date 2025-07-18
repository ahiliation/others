import * as brain  from './brain.js';
// Create a Neural Network
const network = new brain.NeuralNetwork();

// Train the Network with 4 input objects
network.train([
  {input:[0,0], output:{zero:1}},
  {input:[0,1], output:{one:1}},
  {input:[1,0], output:{one:1}},
  {input:[1,1], output:{zero:1}},
]);

// What is the expected output of [1,0]?
let result = network.run([1,0]);

// Display the probability for "zero" and "one"
console.log("one: " + result["one"] + "  " + "zero: " + result["zero"]);
