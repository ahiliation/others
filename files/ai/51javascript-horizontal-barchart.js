const xArray = [55, 49, 44, 24, 15];
const yArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

console.log(data[0].marker)

