var _ = require('lodash');

function about (topic) {
	var assertionSetter;

	assertionSetter = function assertionSetter(assertion, args, testBlock) {
		var testBlock = _.isFunction(testBlock) ? testBlock : null;
		var argsIsActuallyTheTestBlock = false;

		if (!testBlock) {
			argsIsActuallyTheTestBlock = _.isFunction(args);
		}

		testBlock = argsIsActuallyTheTestBlock ? args : testBlock;

		var args = argsIsActuallyTheTestBlock ? [] : args;
		args = _.isArray(args) ? args : [args];

		args.unshift(topic);

		testBlock.apply(null, args);

		return assertionSetter;
	};

	return assertionSetter;
}

export default about;