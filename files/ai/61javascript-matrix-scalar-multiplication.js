import { create, all } from 'mathjs';                                                
const math = create(all);

// JavaScript
// Multiply matrices with math.js

const mA = math.matrix([[1, 2], [3, 4], [5, 6]]);

// Both first row , second element

console.log(mA.subset(math.index(0, 1)));
console.log(mA.get([0,1]));

// Matrix Scalar Multiplication
const matrixMult = math.multiply(2, mA);

// Result [ [2, 4], [6, 8], [10, 12] ]
console.log(matrixMult);
