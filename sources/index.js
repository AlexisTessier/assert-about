var _ = require('lodash');

function about (topic) {
	var assertionSetter;

	assertionSetter = function assertionSetter(assertion, ...args) {
		var lastArgs = _.last(args);

		var testBlock = _.isFunction(lastArgs) ? args.pop() : null;

		args.unshift(topic);

		testBlock.apply(null, args);

		return assertionSetter;
	};

	return assertionSetter;
}

export default about;