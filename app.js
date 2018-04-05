const brain = require('brain.js');
const fs = require('fs');
var datasets = require('./script.js');

const network = new brain.NeuralNetwork();

var redwineDataSet = datasets.redwine();
var flowersDataSet = datasets.flowers();

setTimeout(function() {
	network.train(flowersDataSet);

	const result = network.run({a:6.6,b:2.9,c:4.6,d:1.2})
	//const result = network.run({a:51.5,b:12.49,c:0.13,d:1.8,e:0.044,f:28,g:87,i:0.9908,j:3.5,k:0.62,l:14})
	console.log(result);
	
}, 1000);



