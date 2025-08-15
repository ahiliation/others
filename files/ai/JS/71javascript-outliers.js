import { create, all } from 'mathjs';                                                
const math = create(all);

// Machine Learning
// Calculate the mean (average) value


const values = [99,86,87,88,111,86,103,87,94,78,300,85,86];
let mean = math.mean(values);

console.log(mean);
