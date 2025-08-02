import * as tf from '@tensorflow/tfjs';

// JavaScript
// Adding tensors with tensorflow.js

const tensorA = tf.tensor([[1, 2], [3, 4], [5, 6]]);
const tensorB = tf.tensor([[1,-1], [2,-2], [3,-3]]);

// tensorA.array().then(arr => {
  //   console.log(arr[0][1]); // Outputs 2;

tensorA.print();


// Tensor Addition
const tensorNew = tensorA.add(tensorB);

// Result: [ [2, 1], [5, 2], [8, 3] ]
        tensorNew.print();

//    tensorNew.array().then(arr => {
  //  console.log(arr);
