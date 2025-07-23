import * as tf from '@tensorflow/tfjs';

const series = ['First', 'Second'];

const serie1 = []; 
const serie2 = [];
for (let i = 0; i < 100; i++) {
  serie1[i] = {x:i, y:Math.random() * 100};
  serie2[i] = {x:i, y:Math.random() * 100};
}

const data = {values: [serie1, serie2], series}
console.log(series)

// tfvis.render.scatterplot({name: "my Plots"}, data);
