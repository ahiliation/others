import * as tf from '@tensorflow/tfjs';
const tensorA = tf.tensor([[1, 2], [3, 4], [5, 6]]);
const tensorB = tf.tensor([[1,-1], [2,-2], [3,-3]]);

// Tensor Subtraction
const tensorNew = tensorA.sub(tensorB);

// Result: [ [0, 3], [1, 6], [2, 9] ]
console.log(tensorNew);

