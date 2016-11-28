/**
 * Created by Anita on 27/11/2016.
 */
var assert = require("assert");
var validationModule = require("../src/main.js");

describe('SayPepe', function() {
    it('should add return pepe', function () {
        assert.equal("Pepe!", validationModule.sayPepe());
    });
});