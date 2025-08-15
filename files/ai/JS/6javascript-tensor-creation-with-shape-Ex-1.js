import * as tf from '@tensorflow/tfjs';
const myArr = [1, 2, 3, 4];
const shape = [2, 2];
// const tensorA = tf.tensor(myArr, shape)
const tensorA = tf.tensor(myArr)
const tensorB = tf.tensor(shape);
console.log(tensorA);
console.log(tensorB);
