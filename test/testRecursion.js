/**
 * Created by anita on 21/12/2016.
 */
var assert = require("assert"),
    recursionJavascript = require("../src/recursion.js"),
    sinon = require('sinon');

describe('factorial', function(){
    it('should return 6, from input 3', function(){
        var resultExpected = 6;
        assert.deepStrictEqual(resultExpected, recursionJavascript.factorial(3));
    });

    it('should return 1, from input 1', function(){
        var resultExpected = 1;
        assert.deepStrictEqual(resultExpected, recursionJavascript.factorial(1));
    });
});

describe('gcd', function(){
    it('should return 91 from calculate gcd(2366, 273)', function(){
        var resultExpected = 91;
        assert.deepStrictEqual(resultExpected, recursionJavascript.gcd(2366, 273));

    });
});

describe('integerBetween', function(){
    it('should return [2,3,4]', function(){
        var resultExpected = [2,3,4];
         assert.deepStrictEqual(resultExpected, recursionJavascript.integerBetween(1,5));

    });
});

describe('', function(){
    it('', function(){
        /*var resultExpected;
         assert.deepStrictEqual(resultExpected, functionsJavascript);
         */
    });
});

describe('', function(){
    it('', function(){
        /*var resultExpected;
         assert.deepStrictEqual(resultExpected, functionsJavascript);
         */
    });
});
