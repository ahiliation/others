import * as tf from '@tensorflow/tfjs';

// Extract Correct Data 
function extractData(obj) {
  return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj) {
  return obj.x != null && obj.y != null;
}

// Main Function
async function runTF() {
    const jsonData = await fetch("https://raw.githubusercontent.com/ckurze/mongodb-hivemq-iot-demo/refs/heads/master/car-data.json");
     console.log(jsonData);
    let values = await jsonData.json();
   //  console.log(values);
values = values.map(extractData).filter(removeErrors);
  //  console.log(values);
    // Display Data (for Quality Check)
let text = "";
for (let i = 0; i < values.length; i++) {
  text +=   "x: " + values[i].x + " y:" + values[i].y + "<br>";
} 
    console.log(text);

// End Main Function
}

runTF();
