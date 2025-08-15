import { create, all } from 'mathjs';                                                
const math = create(all);

// JavaScript
// Divide matrices with math.js

const mA = math.matrix([[0, 2], [4, 6], [8, 10]]);

console.log(mA.get([1,0])); 


// Matrix Scalar Division
const matrixDiv = math.divide(mA, 2);

// Result [ [0, 1], [2, 3], [4, 5] ]
console.log(matrixDiv);
