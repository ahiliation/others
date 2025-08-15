import * as tf from '@tensorflow/tfjs';


const series = ['First', 'Second'];
console.log(series[0]);

const serie1 = []; 
const serie2 = [];
for (let i = 0; i < 100; i++) {
  serie1[i] = {x:i, y:Math.random() * 100};
  serie2[i] = {x:i, y:Math.random() * 100};
}

console.log(serie1[0]);


const data = {values: [serie1, serie2], series}
//tfvis.render.scatterplot(surface, data);

