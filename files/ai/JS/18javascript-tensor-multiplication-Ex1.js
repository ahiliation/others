import * as tf from '@tensorflow/tfjs';
const tensorA = tf.tensor([1, 2, 3, 4]);
const tensorB = tf.tensor([4, 4, 2, 2]);

console.log(tensorA);

// Tensor Multiplication
const tensorNew = tensorA.mul(tensorB);

// Result: [ 4, 8, 6, 8 ]
console.log(tensorNew);
