import { create, all } from 'mathjs';                                                
const math = create(all);

// Machine Learning
// The Median is the mid point value:

const speed = [99,86,87,88,111,86,103,87,94,78,77,85,86];
let median = math.median(speed);

console.log(median);
