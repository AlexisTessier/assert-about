var aboutTypeOf = assertAbout.createPlugin("url");

aboutTypeOf.defineAssertion("is", function(about, topic, type) {
    about.string(topic)
        .contains("http")
        .greaterThan(6)
        (function(resolve, reject) {
        	request(topic)
        		.then(function() {
        			about.number(duration)
        				.lowerThan(500)
        			.assert().then(resolve)
        		})
        		.catch(reject);
        })
    .assert()
});