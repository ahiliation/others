import * as tf from '@tensorflow/tfjs';
const myArr = [[1, 2], [3, 4]];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);
console.log(tensorA);
