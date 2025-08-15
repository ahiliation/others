let exp = "Math.cos(x)";

// Generate values
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.2) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Display using Plotly
const data = [{x:xValues, y:yValues, mode:"markers"}];
const layout = {title: "y = " + exp};
console.log(layout.title)
