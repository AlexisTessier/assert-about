var _ = require('lodash');

/*-----------private keys-----------*/
var createAssertionLauncher = Symbol();
var createAssertionSuite = Symbol();
var assertionSuite = Symbol();
var launchNextAssertionGenerator = Symbol();
var launchNextAssertionIterator = Symbol();
var launchNextAssertion = Symbol();
var assertionList = Symbol();

class Topic {
	constructor({value}) {
		
		this.value = value;

		this[assertionList] = [];
		this[launchNextAssertionGenerator] = function*(self){
			for(var i=0,imax = self[assertionSuite].length;i<imax;i++){
				yield self[assertionSuite][i];
			}			
		};
	}

	addAssertion(name, testBlock, args){
		this[assertionList].push({
			name,
			testBlock,
			args
		});
	}

	launchAssertionSuite(){
		this[assertionSuite] ? null : this[createAssertionSuite]();
		this[launchNextAssertion]();
	}

	[launchNextAssertion](){
		if (!this[launchNextAssertionIterator]) {
			this[launchNextAssertionIterator] = this[launchNextAssertionGenerator](this);
		}

		var next = this[launchNextAssertionIterator].next().value;

		delete this.assert;

		if (_.isFunction(next)) {
			next(function(assertFunc) {
				var topic = this.args.shift();

				try{
					assertFunc();
				}
				catch(e){
					e.message = "One of your assertion about "+topic.value+" is not correct :";
					e.message += "\n\t"+this.name+" ";
					e.message += this.args.join(', ');
	
					throw e;
				}

				topic[launchNextAssertion]();
			});
		}
		else{
			console.log("All your assertions about "+this.value+" are correct.");
		}
	}

	[createAssertionSuite](){
		this[assertionSuite] = [];
		_.forEach(this[assertionList], (assertion) => {
			this[assertionSuite].push(this[createAssertionLauncher](assertion));
		})
	}

	[createAssertionLauncher]({name, testBlock, args}){
		var self = this;
		return function assertionLauncher(assertFunc) {
			self.assert = assertFunc.bind({name, args});
			args.unshift(self);
			testBlock.call(self, ...args);
		};
	}
}

export default Topic;