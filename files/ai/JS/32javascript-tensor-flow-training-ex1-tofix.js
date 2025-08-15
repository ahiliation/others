import * as tf from '@tensorflow/tfjs';

// Extract Correct Data 
function extractData(obj) {
  return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj) {
  return obj.x != null && obj.y != null;
}

// Plot Data
// function tfPlot(values, surface) {
//  tfvis.render.scatterplot(surface,
//    {values:values, series:['Original']},
//    {xLabel:'Horsepower', yLabel:'MPG',});
// }

// Main Function
async function runTF() {
const jsonData = await fetch("https://raw.githubusercontent.com/ckurze/mongodb-hi\
vemq-iot-demo/refs/heads/master/car-data.json");    
let values = await jsonData.json();
values = values.map(extractData).filter(removeErrors);

// Plot the Data
// const surface1 = document.getElementById("plot1");
// const surface2 = document.getElementById("plot2");
// tfPlot(values, surface1);

// Convert Input to Tensors
const inputs = values.map(obj => obj.x);
const labels = values.map(obj => obj.y);
const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
const inputMin = inputTensor.min();  
const inputMax = inputTensor.max();
const labelMin = labelTensor.min();
const labelMax = labelTensor.max();
const nmInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
const nmLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

// Create a Tensorflow Model
const model = tf.sequential(); 
model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
model.add(tf.layers.dense({units: 1, useBias: true}));
model.compile({loss:'meanSquaredError', optimizer:'sgd'});

// Start Training
await trainModel(model, nmInputs, nmLabels, surface2);

// End Main Function
}

// Asyncronous Function to Train the Model
async function trainModel(model, inputs, labels, surface) {
  const batchSize = 25;
  const epochs = 50;
  const callbacks = tfvis.show.fitCallbacks(surface, ['loss'], {callbacks:['onEpochEnd']})
  return await model.fit(inputs, labels,
    {batchSize, epochs, shuffle:true, callbacks:callbacks}
  );
}

runTF();
