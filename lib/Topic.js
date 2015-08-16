"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _ = require('lodash');

/*-----------private keys-----------*/
var createAssertionLauncher = _Symbol();
var createAssertionSuite = _Symbol();
var assertionSuite = _Symbol();
var launchNextAssertionGenerator = _Symbol();
var launchNextAssertionIterator = _Symbol();
var launchNextAssertion = _Symbol();
var assertionList = _Symbol();

var Topic = (function () {
	function Topic(_ref) {
		var value = _ref.value;

		_classCallCheck(this, Topic);

		this.value = value;

		this[assertionList] = [];
		this[launchNextAssertionGenerator] = _regeneratorRuntime.mark(function callee$2$0(self) {
			var i, imax;
			return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = 0, imax = self[assertionSuite].length;

					case 1:
						if (!(i < imax)) {
							context$3$0.next = 7;
							break;
						}

						context$3$0.next = 4;
						return self[assertionSuite][i];

					case 4:
						i++;
						context$3$0.next = 1;
						break;

					case 7:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});
	}

	_createClass(Topic, [{
		key: "addAssertion",
		value: function addAssertion(name, testBlock, args) {
			this[assertionList].push({
				name: name,
				testBlock: testBlock,
				args: args
			});
		}
	}, {
		key: "launchAssertionSuite",
		value: function launchAssertionSuite() {
			this[assertionSuite] ? null : this[createAssertionSuite]();
			this[launchNextAssertion]();
		}
	}, {
		key: launchNextAssertion,
		value: function value() {
			if (!this[launchNextAssertionIterator]) {
				this[launchNextAssertionIterator] = this[launchNextAssertionGenerator](this);
			}

			var next = this[launchNextAssertionIterator].next().value;

			delete this.assert;

			if (_.isFunction(next)) {
				next(function (assertFunc) {
					var topic = this.args.shift();

					try {
						assertFunc();
					} catch (e) {
						e.message = "One of your assertion about " + topic.value + " is not correct :";
						e.message += "\n\t" + this.name + " ";
						e.message += this.args.join(', ');

						throw e;
					}

					topic[launchNextAssertion]();
				});
			} else {
				console.log("All your assertions about " + this.value + " are correct.");
			}
		}
	}, {
		key: createAssertionSuite,
		value: function value() {
			var _this = this;

			this[assertionSuite] = [];
			_.forEach(this[assertionList], function (assertion) {
				_this[assertionSuite].push(_this[createAssertionLauncher](assertion));
			});
		}
	}, {
		key: createAssertionLauncher,
		value: function value(_ref2) {
			var name = _ref2.name;
			var testBlock = _ref2.testBlock;
			var args = _ref2.args;

			var self = this;
			return function assertionLauncher(assertFunc) {
				self.assert = assertFunc.bind({ name: name, args: args });
				args.unshift(self);
				testBlock.call.apply(testBlock, [self].concat(_toConsumableArray(args)));
			};
		}
	}]);

	return Topic;
})();

exports["default"] = Topic;
module.exports = exports["default"];
//# sourceMappingURL=Topic.js.map