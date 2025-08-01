import { create, all } from 'mathjs';                                                
const math = create(all);

// JavaScript
// Multiplying matrices with math.js


const mA = math.matrix([1, 2, 3]);
const mB = math.matrix([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

console.log(mB.get([1,2]));

// Matrix Multiplication
const matrixMult = math.multiply(mA, mB);

// Result [14, 32, 50]
console.log(matrixMult);
