'use strict';

function featuresTest(resources) {
	resources.testSuite.currentModuleName = 'assertAbout';

	require('./feature.can-be-instanciated')(resources);
};

module.exports = featuresTest;