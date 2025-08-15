import * as tf from '@tensorflow/tfjs';

// Extract only Correct Data 
function extractData(obj) {
  return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj) {
  return obj.x != null && obj.y != null;
}

// Plot Data
// function tfPlot(values, surface) {
//  tfvis.render.scatterplot(surface,
//    {values:values, series:['Original','Predicted']},
//    {xLabel:'Horsepower', yLabel:'MPG',});
// }

// Main Function
async function runTF() {
const jsonData = await fetch("https://raw.githubusercontent.com/ckurze/mongodb-hivemq-iot-demo/refs/heads/master/car-data.json");
let values = await jsonData.json();
// values = values.map(extractData).filter(removeErrors);

// Plot the Data
// const surface1 = document.getElementById("plot1");
// tfPlot(values, surface1);

// End Main Function
}

runTF();
