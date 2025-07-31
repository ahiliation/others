 import { create, all } from 'mathjs';                                               
 const math = create(all); 
 
// JavaScript
// Subtraction matrices with math.js 


const mA = math.matrix([[1, 2], [3, 4], [5, 6]]);
const mB = math.matrix([[1,-1], [2,-2], [3,-3]]);

// console.log(mB.get([1]));

// Matrix Subtraction
const matrixSub = math.subtract(mA, mB);

// Result [ [0, 3], [1, 6], [2, 9] ]
console.log(matrixSub);
