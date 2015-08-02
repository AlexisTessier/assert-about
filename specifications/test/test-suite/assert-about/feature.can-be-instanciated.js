'use strict';

var assert = require('assert');
var _ = require('lodash');

var feature = function canBeInstanciated(resources) {
	var testSuite = resources.testSuite;

	console.cleanContent();

	testSuite.describe.feature(feature);

	/*
	In order to use VibratoBDD
	As a developper
	I Want to create a instance of VibratoBDD
	*/

	testSuite

	.scenario("Using a valid identifier (a non empty string)", function (trace) {
	})

	.scenario("Using an unvalid identifier", function (trace) {
	});
};

module.exports = feature;