'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var _ = require('lodash');

function about(topic) {
	var assertionSetter;

	assertionSetter = function assertionSetter(assertion) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		var lastArgs = _.last(args);

		var testBlock = _.isFunction(lastArgs) ? args.pop() : null;

		args.unshift(topic);

		testBlock.apply(null, args);

		return assertionSetter;
	};

	return assertionSetter;
}

exports['default'] = about;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map