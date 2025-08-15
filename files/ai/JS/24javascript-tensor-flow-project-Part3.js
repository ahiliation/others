import * as tf from '@tensorflow/tfjs';

// Create Training Data
const xs = tf.tensor([0, 1, 2, 3, 4]);
const ys = xs.mul(1.2).add(5);

console.log(xs);

// Define a Linear Regression Model
const model = tf.sequential();
model.add(tf.layers.dense({units:1, inputShape:[1]}));

// Specify Loss and Optimizer
model.compile({loss: 'meanSquaredError', optimizer:'sgd'});

// Train the Model
model.fit(xs, ys, {epochs:500}).then(() => {myFunction()});

// Use the Model
function myFunction() {
  const xMax = 20;
  const xArr = [];
  const yArr = [];
  for (let x = 10; x <= xMax; x++) { 
    let result = model.predict(tf.tensor([Number(x)]));
    result.data().then(y => {
      xArr.push(x);
      yArr.push(Number(y));
      if (x == xMax) {display(xArr,yArr)};
    });
  }

}

function display(xArr, yArr) {
  let text = "Correct   Predicted<br>";
  for (let i = 0; i < xArr.length; i++) { 
    text += (xArr[i]*1.2+5).toFixed(4) + "   " + yArr[i].toFixed(4) + "<br>";
  }
    console.log(text);
 //  document.getElementById('message').innerHTML = text;
}
