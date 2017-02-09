var assert = require("chai").assert;
var check = require("../lib/luhn.js");

describe("check", function() {
  it("should return true if the number is a valid credit card", function() {
    var num = "371449635398431";
    var result = check(num);
    assert.isTrue(result);
  });
});