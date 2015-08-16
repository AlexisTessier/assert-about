require('source-map-support').install();

var about = require('./index');

var temp = about(15)
	("it's", 15, function(topic, compare) {
		console.log(topic.value, compare);
	})
	("it's like", "15", function(topic, compare) {
		console.log("____________________");
		console.log(topic.value, compare);

		setTimeout(function() {
			throw new Error('yoplpipi async');
		}, 1500)		
	})
	.assert()