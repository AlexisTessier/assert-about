[![Coverage Status](https://coveralls.io/repos/AlexisTessier/assert-about/badge.svg?branch=master&service=github)](https://coveralls.io/github/AlexisTessier/assert-about?branch=master)
[![Build Status](https://travis-ci.org/AlexisTessier/assert-about.svg?branch=master)](https://travis-ci.org/AlexisTessier/assert-about)

Assert About
============

![Project Status : work in progress](https://img.shields.io/badge/Project%20status-work%20in%20progress-lightgrey.svg)

[![Features in Draft](https://badge.waffle.io/AlexisTessier/assert-about.svg?label=Draft&title=Feature%20draft)](http://waffle.io/AlexisTessier/assert-about)
[![Features in Specs](https://badge.waffle.io/AlexisTessier/assert-about.svg?label=Specs&title=Feature%20specs)](http://waffle.io/AlexisTessier/assert-about)
[![Features in Scenario](https://badge.waffle.io/AlexisTessier/assert-about.svg?label=Scenario&title=Feature%20scenario)](http://waffle.io/AlexisTessier/assert-about)
[![Features in Test](https://badge.waffle.io/AlexisTessier/assert-about.svg?label=Test&title=Feature%20test)](http://waffle.io/AlexisTessier/assert-about)
[![Features in Ready](https://badge.waffle.io/AlexisTessier/assert-about.svg?label=Ready&title=Feature%20ready)](http://waffle.io/AlexisTessier/assert-about)

I use this README and the [wiki](https://github.com/AlexisTessier/assert-about/wiki) as a guideline to write my specs.

About
-----

A modular assertion library.

Install
-------

	npm install assert-about

How to use
----------

#####Plugin Usage

```javascript
var about = require('assert-about');

//require a plugin
var aboutString = require('assert-about-string');
var aboutNumber = require('assert-about-number');

about
	.plug(aboutString)
	.plug(aboutNumber)

//Now you can use the assertions defined in these two plugins
//Even in other modules

about("A string")
	("It's a string")
	("It's longer than", 5)

//Or be more explicit and avoid possible conflicts between plugins assertions
about.number(12)
	("It's greater than", 6)
```

#####Basic Usage

```javascript
var assert = require('assert');

var about = require('assert-about');

about("my string")
	("It's a string", function (topic) {
		console.log(topic); // my string

		assert.strictEqual(typeof topic, "string");
	})

	("It contains", "string", function (topic, content) {
		console.log(content); // string

		assert.strictEqual(topic.indexOf(content) > -1, true);
	})

about(42)
	("It's the answer...", function (topic){

	})
```

Documentation
-------------

[See the wiki](https://github.com/AlexisTessier/assert-about/wiki)