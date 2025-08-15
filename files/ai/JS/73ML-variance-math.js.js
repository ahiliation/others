import { create, all } from 'mathjs';                                                
const math = create(all);


// JavaScript Machine Learning
// Calculate the Variance.


const values = [7,8,8,9,9,9,10,11,14,14,15];
let variance = math.variance(values, "uncorrected");

console.log(variance);
