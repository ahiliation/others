import * as tf from '@tensorflow/tfjs';
const myArr = [1, 2, 3, 4];
const shape = [1, 4];
const tensorA = tf.tensor(myArr, shape);
console.log(tensorA.shape);
console.log(tensorA.rank);
