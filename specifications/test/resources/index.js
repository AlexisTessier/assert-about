'use strict';

require('./console-hack');

var resources = {
	assertAbout : require('../../../index'),
	testSuite :  require('./test-suite-manager'),
	specifications : require('../../index'),
	notAFunctionList : require('./not-a-function-list'),
	errorWithMessage : require('./error-with-message')
};

module.exports = resources;