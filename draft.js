var assert = require('assert');

var about = require('assert-about');

//using a function
about("my string")
	("It's a string", function (topic) {
		console.log(topic); // my string

		assert.strictEqual(typeof topic, "string");
	})

	("It contains", "string", function (topic, content) {
		console.log(content); // string

		assert.strictEqual(topic.indexOf(content) > -1, true);
	})

//create a plugin
var aboutTypeOf = about.create.plugin("typeOf");

aboutTypeOf.addAssertion("It's a", function(topic, type) {
	assert.strictEqual(typeof topic, type);
});

aboutTypeOf.addAssertion("It's a string", function(topic) {
	aboutTypeOf(topic)
		("It's a", "string")
});

aboutTypeOf.addAssertion("It's an object", function(topic) {
	aboutTypeOf(topic)
		("It's a", "object")
});

//-----------------------------
var aboutString = about.create.plugin("string");

aboutString.plug(aboutTypeOf, [
	"It's a string" //This aboutTypeOf assertion will be accesible even if aboutTypeOf is not pluged
]);

aboutString.addDefaultAssertion(function(topic) {
	this.about(topic)
		("It's a string")
});

aboutString.addAssertion("It contains", function(topic, content) {
	assert.strictEqual(topic.indexOf(content) > -1, true);
});
//-----------------------------

var aboutInstanceOf = about.create.plugin('instanceOf')

aboutInstanceOf.plug(aboutTypeOf);

aboutInstanceOf.addDefaultAssertion(function(topic) {
	aboutInstanceOf(topic)
		("It's an object")
});

aboutInstanceOf.addAssertion("It's an instance of", function(topic, constructor) {
	assert.strictEqual(topic instanceof constructor, true);
});

aboutInstanceOf.addAssertion("It's an Array", function(topic, constructor) {
	aboutInstanceOf(topic)
		("It's an instance of", Array)
});

//-----------------------------

var aboutArray = about.create.plugin("array");

aboutArray.plug(aboutInstanceOf);

aboutArray.addDefaultAssertion(function(topic) {
	aboutArray(topic)
		("It's an array")
});

aboutArray.addAssertion("It contains", function(topic, content) {
	for(var i = 0, imax = topic.length, contains = false;(i < imax && !contains); i++){
		contains = topic[i] === content;
	}
	assert.strictEqual(contains, true);
});

//-----------------------------

//add a plugin
var aboutTypeOf = require('assert-about-type-of');
var aboutString = require('assert-about-string');
var aboutArray = require('assert-about-array');

about
	.plug(aboutTypeOf)
	.plug(aboutString)
	.plug(aboutArray, "list")

//use a plugin
about.string("other string")
	("It contains", "other")
//the it contains assertion is overrided by the it contains assertion of aboutArray

//-----------------------------------
about(["this", "is", "a", "list", "or", "an", "Array"])
	("It contains", "list")

//equivalent to
about.list(["this", "is", "a", "list", "or", "an", "Array"])
	("It contains", "list")

//The following example throw an error because the plugin instanceOf is not used
about("something")
	("It's an instance of", String)

//Asyncronous assertions
var aboutUrl = about.create.plugin('url');

var Browser = require('zombie');

aboutUrl.plug(aboutString);

aboutUrl.addAssertion("It's an url", function(topic) {
	aboutUrl(topic)
		("It's a string")
		("It match the patterns", urlPattern)
});

aboutUrl.addDefaultAssertion(["It's an url"])

aboutUrl.addAsyncAssertion("It opens", function(topic, done) {
	var browser = new Browser();
	browser.visit(topic, done);
});

//------------------------>

about.url("https://fr.wikipedia.org/wiki/Tortue")
	("It opens")
