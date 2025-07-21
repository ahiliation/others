import * as tf from '@tensorflow/tfjs';
const tensorA = tf.tensor([1, 2, 3, 4]);

// Tensor Square
const tensorNew = tensorA.square();

// Result [ 1, 4, 9, 16 ]
console.log(tensorNew);
