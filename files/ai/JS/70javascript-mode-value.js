import { create, all } from 'mathjs';                                                
const math = create(all);

// Machine Learning
// The Mode is the most common value


const speed = [99,86,87,88,111,86,103,87,94,78,77,85,86];
let mode = math.mode(speed);

console.log(mode);

