import * as tf from '@tensorflow/tfjs';
const tensorA = tf.tensor([[1, 2], [3, 4], [5, 6]]);
const tensorB = tf.tensor([[1], [2], [3]]);

// Tensor Addition
const tensorNew = tensorA.add(tensorB);

// Result: [ [2, 1], [5, 2], [8, 3] ]  change related 
console.log(tensorNew);
console.log(tensorB);

