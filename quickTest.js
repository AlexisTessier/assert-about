//require('source-map-support').install();

//var about = require('./index');
var assert = require('assert');

function assertThrow(block, catched) {
	try{
		block();
	}
	catch(e){
		assert.strictEqual(e, catched);
	}
}

assertThrow(function () {
	throw 8;
}, 8);

assert.doesNotThrow(
  function() {
  	console.log("kjh")
  },
  EvalError
);

/*var temp = about(15)
	("it's equal to", "15", function(topic, compare) {
		setTimeout(function() {
			topic.assert(function(){
				assert.equal(topic.value, compare);
			});
			
		}, 1500)
	})
	("it's not equal to", 8, function(topic, compare) {
		topic.assert(function(){
			assert.notEqual(topic.value, compare);
		});
	})
	.assert();*/