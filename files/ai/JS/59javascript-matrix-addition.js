import { create, all } from 'mathjs';
const math = create(all);

// Adding matrices with math.js


const mA = math.matrix([[1, 2], [3, 4], [5, 6]]);
const mB = math.matrix([[1,-1], [2,-2], [3,-3]]);
console.log(mA.get([1][1]));

// Matrix Addition
const matrixAdd = math.add(mA, mB);

// Result [ [2, 1], [5, 2], [8, 3] ]
console.log(matrixAdd);
