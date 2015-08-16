"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _ = require('lodash');

/*-----------private keys-----------*/
var createAssertionLauncher = _Symbol();
var createAssertionSuite = _Symbol();
var assertionSuite = _Symbol();
var launchNextAssertionGenerator = _Symbol();
var launchNextAssertion = _Symbol();

var Topic = (function () {
	function Topic(_ref) {
		var value = _ref.value;

		_classCallCheck(this, Topic);

		this.value = value;
		this.assertionList = [];

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
			this.assertionList.push({
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
			var _this = this;

			this[launchNextAssertionGenerator](this)._invoke().value.then(function () {
				_this.launchNextAssertion();
			});
		}
	}, {
		key: createAssertionSuite,
		value: function value() {
			var _this2 = this;

			this[assertionSuite] = [];
			_.forEach(this.assertionList, function (assertion) {
				_this2[assertionSuite].push(_this2[createAssertionLauncher](assertion));
			});
		}
	}, {
		key: createAssertionLauncher,
		value: function value(_ref2) {
			var name = _ref2.name;
			var testBlock = _ref2.testBlock;
			var args = _ref2.args;

			return new _Promise(function (resolve, reject) {
				var message = "ok";
				console.log(name);

				try {
					console.log(testBlock);

					testBlock.apply(undefined, _toConsumableArray(args));
					console.log("kjhkhj");
				} catch (e) {
					console.log(e);
					message = e.message;
					throw e;
				}

				message === "ok" ? resolve(message) : reject(message);
			});
		}
	}]);

	return Topic;
})();

exports["default"] = Topic;
module.exports = exports["default"];
//# sourceMappingURL=Topic.js.map