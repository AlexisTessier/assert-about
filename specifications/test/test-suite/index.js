'use strict';

var resources = require('../resources');

function testSuite(context) {
	resources.testSuite.setContext(context);

	require('./assert-about')(resources);
};

module.exports = testSuite;