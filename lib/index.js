'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

require('babel/polyfill');

var _ = require('lodash');

var Topic = require('./Topic');

function about(topicValue) {
	var assertionSetter;

	var topic = new Topic({ value: topicValue });

	assertionSetter = function assertionSetter(assertion) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		var lastArgs = _.last(args);

		var testBlock = _.isFunction(lastArgs) ? args.pop() : null;

		topic.addAssertion(assertion, testBlock, args);

		return assertionSetter;
	};

	assertionSetter.assert = function assertAbout() {
		topic.launchAssertionSuite();
	};

	return assertionSetter;
}

/*-------------------------------------------------*/
function createFunction(argument) {}

exports['default'] = about;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map