'use strict';

function featuresTest(resources) {
	resources.testSuite.currentModuleName = 'assertAbout';

	require('./feature.basic-usage')(resources);
};

module.exports = featuresTest;