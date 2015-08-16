var _ = require('lodash');

/*-----------private keys-----------*/
var createAssertionLauncher = Symbol();
var createAssertionSuite = Symbol();
var assertionSuite = Symbol();
var launchNextAssertionGenerator = Symbol();
var launchNextAssertion = Symbol();

class Topic {
	constructor({value}) {
		
		this.value = value;
		this.assertionList = [];

		this[launchNextAssertionGenerator] = function*(self){
			for(var i=0,imax = self[assertionSuite].length;i<imax;i++){
				yield self[assertionSuite][i];
			}			
		};
	}

	addAssertion(name, testBlock, args){
		this.assertionList.push({
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
		this[launchNextAssertionGenerator](this)._invoke().value.then(()=>{
			this.launchNextAssertion();
		})
	}

	[createAssertionSuite](){
		this[assertionSuite] = [];
		_.forEach(this.assertionList, (assertion) => {
			this[assertionSuite].push(this[createAssertionLauncher](assertion));
		})
	}

	[createAssertionLauncher]({name, testBlock, args}){
		return new Promise((resolve, reject)=> {
			var message = "ok";
			console.log(name);

			try{
				console.log(testBlock);
				
				testBlock(...args);
				console.log("kjhkhj");
			}
			catch(e){
				console.log(e);
				message = e.message;
				throw e;
			}

			message === "ok" ? resolve(message) : reject(message);
		});
	}
}

export default Topic;