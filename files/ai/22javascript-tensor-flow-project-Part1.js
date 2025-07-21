import * as tf from '@tensorflow/tfjs';
// Create Training Data
const xs = tf.tensor([0, 1, 2, 3, 4]);
const ys = xs.mul(1.2).add(5);

console.log(xs);
console.log(ys);

// Define a Linear Regression Model
const model = tf.sequential();
console.log(model);
model.add(tf.layers.dense({units:1, inputShape:[1]}));
console.log("hello model related");
console.log(model);
// Specify Loss and Optimizer
model.compile({loss: 'meanSquaredError', optimizer:'sgd'});
// Train the Model
model.fit(xs, ys, {epochs:500}).then(() => {myFunction()});

// Use the Model
function myFunction() {
  const xMax = 10;
  const xArr = [];
  const yArr = [];
  for (let x = 0; x <= xMax; x++) { 
    let result = model.predict(tf.tensor([Number(x)]));
    result.data().then(y => {
      xArr.push(x);
      yArr.push(Number(y));
      if (x == xMax) {plot(xArr, yArr)};
    });
  }
    console.log("result...");
    console.log(result);
    console.log("hello");
}

function plot(xArr, yArr) {
// Define Data
const data = [{x:xArr,y:yArr,mode:"markers",type:"scatter"}];

// Define Layout
const layout = {
  xaxis: {range: [0, 10]},
  yaxis: {range: [0, 20]},  
};

// Display Plot
// Plotly.newPlot("myPlot", data, layout);
}
