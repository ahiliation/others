import { create, all } from 'mathjs';                                                
const math = create(all);

// JavaScript Machine Learning
// Calculate the Standard Deviation


// Calculate the Standard Deviation
const values = [7,8,8,9,9,9,9,10,11,14,15];
let std = math.std(values, "uncorrected");

console.log(std);
