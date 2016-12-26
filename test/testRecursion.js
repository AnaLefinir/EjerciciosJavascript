/**
 * Created by anita on 21/12/2016.
 */
var assert = require("assert"),
    recursionJavascript = require("../src/recursion.js"),
    sinon = require('sinon');

describe('factorial', function () {
    it('should return 6, from input 3', function () {
        var resultExpected = 6;
        assert.deepStrictEqual(resultExpected, recursionJavascript.factorial(3));
    });

    it('should return 1, from input 1', function () {
        var resultExpected = 1;
        assert.deepStrictEqual(resultExpected, recursionJavascript.factorial(1));
    });
});

describe('gcd', function () {
    it('should return 91 from calculate gcd(2366, 273)', function () {
        var resultExpected = 91;
        assert.deepStrictEqual(resultExpected, recursionJavascript.gcd(2366, 273));
    });
});

describe('range', function () {
    it('should return [2] from (1,3)', function () {
        var resultExpected = [2];
        assert.deepStrictEqual(resultExpected, recursionJavascript.range(1,3));
    });

    it('should return [] from (1,2)', function () {
        var resultExpected = [];
        assert.deepStrictEqual(resultExpected, recursionJavascript.range(1,2));
    });
});

describe('sumOfArray', function () {
    it('should return 6 from array of three elements', function () {
        var resultExpected = 6;
        assert.deepStrictEqual(resultExpected, recursionJavascript.sumOfArray([1,2,3]));
    });

    it('should return 0 from empty array', function () {
        var resultExpected = 0;
        assert.deepStrictEqual(resultExpected, recursionJavascript.sumOfArray([]));
    });

    it('should return 2 from array with one element', function () {
        var resultExpected = 2;
        assert.deepStrictEqual(resultExpected, recursionJavascript.sumOfArray([2]));
    });
});

describe('', function () {
    it('', function () {
        /*var resultExpected;
         assert.deepStrictEqual(resultExpected, functionsJavascript);
         */
    });
});
