import * as tf from '@tensorflow/tfjs';
const tensorA = tf.tensor([2, 4, 6, 8]);
const tensorB = tf.tensor([1, 2, 2, 2]);

console.log(tensorA);
// Tensor Division
const tensorNew = tensorA.div(tensorB);

// Result: [ 2, 2, 3, 4 ]
console.log(tensorNew);
