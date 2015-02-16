var util = require("../src/util");

exports.testGreetings = function (test) {
  test.equal(util.greetings("Dimitar"), "Hello Dimitar, by util file", "string should be equal");
  test.done();
}
