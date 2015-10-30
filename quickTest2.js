var assert = require('assert');

var assertAbout = assertAboutPluginFactory('assertAbout');

assertAbout.defineAssertion("equal", function (about, topic, waitedValue) {
	about(typeof topic)
		(function (resolve, reject) {
			about.assertAbout.option.strictEqual ? assert.strictEqual(topic, waitedValue) : assert.equal(topic, waitedValue);
			resolve();
		})
	.assert()
}, ['equals', "equal to", 'is equal to']);

assertAbout.defineOption('strictEqual', true);

module.exports = assertAbout.exports();