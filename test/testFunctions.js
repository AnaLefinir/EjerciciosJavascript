/**
 * Created by Anita on 07/12/2016.
 */
var assert = require("assert"),
    functionsJavascript = require("../src/functions.js"),
    sinon = require('sinon');

describe('reverseANumber', function () {
    it('should return "321" from "123"', function () {
        assert.deepStrictEqual(321, functionsJavascript.reverseANumber(123));
    });

    it('should return "1" from "1"', function () {
        assert.deepStrictEqual(1, functionsJavascript.reverseANumber(1));
    });
});

describe('isPalindrome', function () {
    it('should return a true from "ana"', function () {
        assert.deepStrictEqual(true, functionsJavascript.isPalindrome("ana"));
    });

    it('should return a false from "dos"', function () {
        assert.deepStrictEqual(false, functionsJavascript.isPalindrome("dos"));
    });

    it('should return a false from "nurses run"', function () {
        assert.deepStrictEqual(true, functionsJavascript.isPalindrome("nurses run"));
    });
});

describe('combinationsOfWord', function(){
    it('should return 13 combination from a "0123"', function(){
        var combinationExpected = ["0123", "012", "01", "0", "123", "12", "1", "23","2", "3"].toString();
        assert.deepStrictEqual(combinationExpected, functionsJavascript.combinationsOfWord("0123"));
    });
});



describe('combi', function(){
    it('should return 6 combination from a "dog"', function(){
        var combinationExpected = "d,do,dog,o,og,g";
        assert.deepStrictEqual(combinationExpected, functionsJavascript.combi("dog"));
    });
});

describe('', function(){
    it('', function(){

    });
});

describe('', function(){
    it('', function(){

    });
});

describe('', function(){
    it('', function(){

    });
});
