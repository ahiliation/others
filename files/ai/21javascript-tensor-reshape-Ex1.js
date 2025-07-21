import * as tf from '@tensorflow/tfjs';
const tensorA = tf.tensor([[1, 2], [3, 4]]);
const tensorB = tensorA.reshape([4, 1]);

// Result [ [1], [2], [3], [4] ]
console.log(tensorB);
