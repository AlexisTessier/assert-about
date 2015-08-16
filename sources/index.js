var _ = require('lodash');

var Topic = require('./Topic');

function about (topicValue) {
	var assertionSetter;

	var topic = new Topic({value : topicValue});

	assertionSetter = function assertionSetter(assertion, ...args) {
		var lastArgs = _.last(args);

		var testBlock = _.isFunction(lastArgs) ? args.pop() : null;

		args.unshift(topic);

		topic.addAssertion(assertion, testBlock, args);

		return assertionSetter;
	};

	assertionSetter.assert = function assertAbout () {
		topic.launchAssertionSuite();
	};

	return assertionSetter;
}


/*-------------------------------------------------*/
function createFunction (argument) {
	// body...
}

export default about;