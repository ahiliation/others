import * as tf from '@tensorflow/tfjs';
const myArr = [[1, 2], [3, 4]];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);
tensorA.array().then(array => display(array[1]));

 // Result: 3,4
function display(data) {
    console.log(data);
}
