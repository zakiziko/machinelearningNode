const fs = require('fs');
const path = require('path');
const _ = require('underscore');

var test = {
	flowers : function(){
		var columns = [];
		fs.readFile('irisDataSets.csv', 'utf8', function (err,data) {
	  	if (err) {
	    	return console.log(err);
	  	}
	  	
	  	var json = [];
	    var csvArray = data.split('\n');
	    /*
			a :  sepal length
			b :  sepal width
			c :  petal length
			d :  petal width
	    */
	    csvArray.forEach(column=>{
        	var input = {
           		a:column.split(',')[0],
       			b:column.split(',')[1],
        	   	c:column.split(',')[2],
        	   	d:column.split(',')[3]
            }
           	switch(column.split(',')[4].replace('\r','')){
           		case 'Iris-setosa':
           			var output = {IrisSetosa:1};
           		break;
           		case 'Iris-versicolor':
           			var output = {IrisVersicolor:1};
           		break;
           		case 'Iris-virginica':
           			var output = {IrisVirginica:1};
           		break;
           		default:
           			break;
           	} 	
            	
           	columns.push({input:input,output:output});
            });
	    
            
		});
		
		return columns;	
		
		
	},
	redwine:function(){
		var columns = [];
		fs.readFile('winequality-red.csv', 'utf8', function (err,data) {
		  	if (err) {
		    	return console.log(err);
		  	}
		  	var json = [];
		    var csvArray = data.split('\n');
		    

		    /*
		    a : fixed acidity
		    b: volatile acidity
		    c : citric acid
		    d : residual sigar
		    e : chlorides
		    f : free sulfur
		    g : total sulfur dioxide
		    i : density
		    j : PH
		    k : sulphates
		    l : alcohol
		    */
		    csvArray.forEach(column=>{
		    	var input = {
	           		a:column.split(';')[0],
	            	b:column.split(';')[1],
	            	c:column.split(';')[2],
	            	d:column.split(';')[3],
	            	e:column.split(';')[4],
	            	f:column.split(';')[5],
	            	g:column.split(';')[6],
	            	i:column.split(';')[7],
	            	j:column.split(';')[8],
	            	k:column.split(';')[9],
	            	l:column.split(';')[10],

	            }
	            var output = {
	           		qualite:(column.split(';')[11]/10)
	           	}
	            	
	             	columns.push({input:input,output:output});
	        });    
		});
		return columns;	
	}
}

module.exports = test;