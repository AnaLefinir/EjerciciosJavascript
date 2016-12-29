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

describe('exponent', function () {
    it('should return 64 from (8,2)', function () {
        var resultExpected = 64;
        assert.deepStrictEqual(resultExpected, recursionJavascript.baseToExponent(8,2));
    });

    it('should return 8 from (8,1)', function () {
        var resultExpected = 8;
        assert.deepStrictEqual(resultExpected, recursionJavascript.baseToExponent(8,1));
    });

    it('should return 1 from (8,0)', function () {
        var resultExpected = 1;
        assert.deepStrictEqual(resultExpected, recursionJavascript.baseToExponent(8,0));
    });
});

describe('fibonacciNumbers', function () {
    it('should return [0]', function () {
        var resultExpected = [0];
        assert.deepStrictEqual(resultExpected, recursionJavascript.fibonacci(1));

    });

    it('should return [0,1]', function () {
        var resultExpected = [0,1];
        assert.deepStrictEqual(resultExpected, recursionJavascript.fibonacci(2));

    });
});

describe('isEven', function () {
    it('should return true of 0', function () {
        var resultExpected = true;
        assert.deepStrictEqual(resultExpected, recursionJavascript.isEven(0));

    });

    it('should return true of 2', function () {
        var resultExpected = true;
        assert.deepStrictEqual(resultExpected, recursionJavascript.isEven(2));

    });

    it('should return true of 55', function () {
        var resultExpected = false;
        assert.deepStrictEqual(resultExpected, recursionJavascript.isEven(55));

    });

    it('should return true of 100', function () {
        var resultExpected = true;
        assert.deepStrictEqual(resultExpected, recursionJavascript.isEven(100));

    });

    it('should return true of -100', function () {
        var resultExpected = true;
        assert.deepStrictEqual(resultExpected, recursionJavascript.isEven(-100));

    });

    it('should return true of -55', function () {
        var resultExpected = false;
        assert.deepStrictEqual(resultExpected, recursionJavascript.isEven(-55));

    });
});

describe('binarySearch', function () {
    it('should return index 2', function(){
        var resultExpected = 2;
        assert.deepStrictEqual(resultExpected, recursionJavascript.binarySearch(4, [1,2,4,5,8]));
    });

    it('should return index 4', function(){
        var resultExpected = 4;
        assert.deepStrictEqual(resultExpected, recursionJavascript.binarySearch(6, [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]));
    });

    it('should return index 3', function(){
        var resultExpected = 3;
        assert.deepStrictEqual(resultExpected, recursionJavascript.binarySearch(3, [0,1,2,3]));
    });
});