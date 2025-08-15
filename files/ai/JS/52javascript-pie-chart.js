const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const layout = {title:"World Wide Wine Production"};

const data = [{labels:xArray, values:yArray, type:"pie"}];

console.log(data[0]["labels"]);
