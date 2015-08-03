'use strict';

var assert = require('assert');
var _ = require('lodash');

var feature = function basicUsage(resources) {
	var testSuite = resources.testSuite;

	console.cleanContent();

	testSuite.describe.feature(feature);

	/*
	In order to set custom assertion
	As a developper
	I Want to use a function containing multiples assertions
	*/

	var about = resources.assertAbout;

	testSuite

	.scenario("Using the about function", function (trace) {
		assert.strictEqual(typeof about, 'function', trace('about should be a function'));

		assert.strictEqual(typeof about(85), 'function', trace('about should return a function'));
	})

	.scenario("Setting an assertion with a valid name", function (trace) {
	})

	.scenario("Setting an assertion with a unvalid name", function (trace) {
	})

	.scenario("Using an true assertion", function (trace) {
		//given a topic
		//when i assert a true thing about it
		//then nothing happen
	})


	.scenario("Using a false assertion", function (trace) {
		//given a topic
		//when i assert a false thing about it
		//then an error must be thrown
	})

	.scenario("Accessing to the topic", function (trace) {
		var originalTopic = 18, retrievedTopic = null;
		//given A topic
		about(originalTopic)

		//when I get the topic in a assert method
			("Retrieve topic", function (topic) {
				retrievedTopic = topic;
			})

		//then it's the same as original topic
		assert.strictEqual(retrievedTopic, originalTopic, trace("The topic in testBlock function should be the same as topic defined with about function"));
	})

	.scenario("Accessing to a single argument", function (trace) {
		var originalArg = 12, retrievedArg = null;

		about("something")
			("retrieve Arg", originalArg, function(topic, arg) {
				retrievedArg = arg;
			})

		assert.strictEqual(retrievedArg, originalArg, trace("The args in testBlock function should be the same as args defined with about function"))
	})

	.scenario("Accessing to multiple arguments", function (trace) {
		var originalArg = 12, retrievedArg = null,
			originalArg2 = 15, retrievedArg2 = null;

		about("something")
			("retrieve Arg", originalArg, originalArg2, function(topic, arg, arg2) {
				retrievedArg = arg;
				retrievedArg2 = arg2;
			})

		assert.strictEqual(retrievedArg, originalArg, trace("The args in testBlock function should be the same as args defined with about function"))
	})

	.scenario("Chaining multiple assertions", function (trace) {

	})

	.scenario("Setting an assertion without function and without plugin", function (trace) {

	});
};

module.exports = feature;