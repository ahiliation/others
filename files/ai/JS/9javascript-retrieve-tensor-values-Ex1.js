import * as tf from '@tensorflow/tfjs';
const myArr = [[1, 2], [3, 4]];
const tensorA = tf.tensor(myArr);
tensorA.data().then(data => display(data));
console.log(tensorA.data());
// Result: 1,2,3,4 
function display(data) {
    console.log(data);
    console.log(tensorA);
}
