import { create, all } from 'mathjs';
const math = create(all);

// Machine Learning
// Calculate the mean (average) value.


const values = [7,8,8,9,9,9,10,11,14,14,15];
let mean = math.mean(values);

console.log(mean);

