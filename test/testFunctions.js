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

    it('should return a true from "nurses run"', function () {
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

describe('toUpperCaseFirstWord', function(){
    it('should return "Ana Banana" from "ana banana"', function(){
        var resultExpected = "Ana Banana";
        assert.deepStrictEqual(resultExpected, functionsJavascript.toUpperCaseFirstWord("ana banana"));
    });
});

describe('howManyVowels', function(){
    it('should 6 return from "chuchin es hermosa"', function(){
        var resultExpected = 6;
        assert.deepStrictEqual(resultExpected, functionsJavascript.howManyVowels("chuchin es hermosa"));
    });

    it('should 0 return from "zzjlmn"', function(){
        var resultExpected = 0;
        assert.deepStrictEqual(resultExpected, functionsJavascript.howManyVowels("zzjlmn"));
    });
});

describe('isPrime', function(){
    it('should return yes from 103', function(){
        var resultExpected = "Yes";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isPrime(103));
    });

    it('should return no from 15', function(){
        var resultExpected = "No";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isPrime(15));
    });
});

describe('whatTypeIs', function(){
    it('should return string from "Ana"', function(){
        var resultExpected = "string";
        assert.deepStrictEqual(resultExpected, functionsJavascript.whatTypeIs("Ana"));
    });

    it('should return number from 2', function(){
        var resultExpected = "number";
        assert.deepStrictEqual(resultExpected, functionsJavascript.whatTypeIs(2));
    });

    it('should return function', function(){
        var elementToEvalute = function lala (){};
        var resultExpected = "function";
        assert.deepStrictEqual(resultExpected, functionsJavascript.whatTypeIs(elementToEvalute));
    });

    it('should return boolean from false', function(){
        var resultExpected = "boolean";
        assert.deepStrictEqual(resultExpected, functionsJavascript.whatTypeIs(false));
    });

    it('should return object from {chuchin: hermosa}', function(){
        var elementToEvalute = {chuchin: "hermosa"};
        var resultExpected = "object";
        assert.deepStrictEqual(resultExpected, functionsJavascript.whatTypeIs(elementToEvalute));
    });

    it('should return undefined', function(){
        var elementToEvalute;
        var resultExpected = "undefined";
        assert.deepStrictEqual(resultExpected, functionsJavascript.whatTypeIs(elementToEvalute));
    });
});

describe('matrix', function(){
    it('should return a matrix identity of 4x4', function(){
        var resultExpected = "\n1000\n0100\n0010\n0001\n";
        assert.deepStrictEqual(resultExpected, functionsJavascript.matrix(4));
    });

    it('should return new line', function(){
        var resultExpected = "\n";
        assert.deepStrictEqual(resultExpected, functionsJavascript.matrix(0));
    });
});

describe('findSecondLowestAndGreatest', function(){
    it('should return from array "2,4"', function(){
        var resultExpected = "2, 4";
        assert.deepStrictEqual(resultExpected, functionsJavascript.findSecondLowestAndGreatest([1,2,3,4,5]));
    });

    it('should return from array "Not Match, Not Match"', function(){
        var resultExpected = "Not Match, Not Match";
        assert.deepStrictEqual(resultExpected, functionsJavascript.findSecondLowestAndGreatest([1]));
    });
});

describe('isPerfect', function(){
    it('should return "Is a Perfect Number" from 28', function(){
        var resultExpected = "Is a Perfect Number";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isPerfect(28));
    });

    it('should return "Is Not a Perfect Number" from 52', function(){
        var resultExpected = "Is Not a Perfect Number";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isPerfect(52));
    });
});

describe('factors', function(){
    it('should return "1,2,3,4,6,12" from 12', function(){
        var resultExpected = "1,2,3,4,6,12";
        assert.deepStrictEqual(resultExpected, functionsJavascript.factors(12));
    });

    it('should return "1,17" from 17', function(){
        var resultExpected = "1,17";
        assert.deepStrictEqual(resultExpected, functionsJavascript.factors(17));
    });
});

describe('amoutToCoins', function(){
    it('should return "25,10,10,1" from 46', function(){
        var resultExpected = "25,10,10,1";
        assert.deepStrictEqual(resultExpected, functionsJavascript.amountToCoins(46, [25,10,5,2,1]));
    });

    it('should return "50,25,10,1,1" from 87', function(){
        var resultExpected = "50,25,10,1,1";
        assert.deepStrictEqual(resultExpected, functionsJavascript.amountToCoins(87, [50,25,10,5,1]));
    });
});

describe('bElevateN', function(){
    it('should return 64 from input 4,3', function(){
        var resultExpected = 64;
        assert.deepStrictEqual(resultExpected, functionsJavascript.bElevateN(4, 3));
    });

    it('should return 8 from input 2,3', function(){
        var resultExpected = 8;
        assert.deepStrictEqual(resultExpected, functionsJavascript.bElevateN(2, 3));
    });
});

describe('extractLetter', function(){
    it('should return a string without the letter o', function(){
        var resultExpected = "thequickbrwnfxjumpsverthelazydg";
        assert.deepStrictEqual(resultExpected, functionsJavascript.extractLetterO("thequickbrownfoxjumpsoverthelazydog"));
    });
});

describe('occurrencesOfLetters', function(){
    it('should return a string with all letters appearance from string given. All lowercase', function(){
        var resultExpected = "The letter: a, appears 5 times. The letter: b, appears 1 times. The letter: n, appears 3 times.";
        assert.deepStrictEqual(resultExpected, functionsJavascript.occurrencesOfLetters("ana banana"));
    });

    it('should return a string with all letters appearance from string given identifying the capital letter', function(){
        var resultExpected = "The letter: A, appears 1 times. The letter: a, appears 4 times. The letter: b, appears 1 times. The letter: n, appears 3 times.";
        assert.deepStrictEqual(resultExpected, functionsJavascript.occurrencesOfLetters("ana bAnana"));
    });
});

describe('searchBinaryForIndex', function(){
    it('should return index 2', function(){
        var resultExpected = 2;
        assert.deepStrictEqual(resultExpected, functionsJavascript.searchBinaryForIndex([1,2,4,5,8], 4));
    });

    it('should return index 4', function(){
        var resultExpected = 4;
        assert.deepStrictEqual(resultExpected, functionsJavascript.searchBinaryForIndex([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6));
    });

    it('should return index 3', function(){
        var resultExpected = 3;
        assert.deepStrictEqual(resultExpected, functionsJavascript.searchBinaryForIndex([0,1,2,3], 3));
    });
});

describe('biggerElementsThan', function(){
    it('should return all elements bigger than 10', function(){
        var resultExpected = "85,15,55";
        assert.deepStrictEqual(resultExpected, functionsJavascript.biggerElementsThan([85,15,1,5,8,55,3], 10));
    });

    it('should return "Not match"', function(){
        var resultExpected = "Not match";
        assert.deepStrictEqual(resultExpected, functionsJavascript.biggerElementsThan([2,5,8,9], 10));
    });
});

describe('searchingLetterInString', function(){
    it('a: should return 2 from "ana"', function(){
        var resultExpected = 2;
        assert.deepStrictEqual(resultExpected, functionsJavascript.searchingLetterInString("ana", "a"));
    });

    it('A: should return 1 from "Ana"', function(){
        var resultExpected = 1;
        assert.deepStrictEqual(resultExpected, functionsJavascript.searchingLetterInString("Ana", "A"));
    });

    it('b: should return 0 from "Ana"', function(){
        var resultExpected = 0;
        assert.deepStrictEqual(resultExpected, functionsJavascript.searchingLetterInString("Ana", "B"));
    });


});

describe('isNotRepeat', function(){
    it('should return letter "n"', function(){
        var resultExpected = "n";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat("ana"));
    });

    it('should return letter "n"', function(){
        var resultExpected = "n";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat("anabata"));
    });

    it('should return letter "Not match"', function(){
        var resultExpected = "Not match";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat("lalalal"));
    });

    it('should return letter "e"', function(){
        var resultExpected = "e";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat("lalalale"));
    });
});

describe('isNotRepeat2', function(){
    it('should return letter "n"', function(){
        var resultExpected = "n";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat2("ana"));
    });

    it('should return letter "n"', function(){
        var resultExpected = "n";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat2("anabata"));
    });

    it('should return letter "Not match"', function(){
        var resultExpected = "Not match";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat2("lalalal"));
    });

    it('should return letter "e"', function(){
        var resultExpected = "e";
        assert.deepStrictEqual(resultExpected, functionsJavascript.isNotRepeat2("lalalale"));
    });
});

describe('bubbleSort', function(){
    it('should return [15,12,11,8,5,2]', function(){
        var resultExpected = [15,12,11,8,5,2];
        assert.deepStrictEqual(resultExpected, functionsJavascript.bubbleSort([2,15,8,11,5,12]));
    });

    it('should return [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]', function(){
        var resultExpected = [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1];
        assert.deepStrictEqual(resultExpected, functionsJavascript.bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
    });
});

describe('longestCountryNames', function(){
    it('should return "United States of America"', function(){
        var resultExpected = "United States of America";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestCountryNames(["Australia", "Germany", "United States of America"]));
    });

    it('should return "Australia, Argentina"', function(){
        var resultExpected = "Australia, Argentina";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestCountryNames(["Australia", "Germany", "Argentina"]));
    });
});

describe('longestSubstringWithoutRepeat', function(){
    it('should return "gle.com"', function(){
        var resultExpected = "gle.com";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestSubstringWithoutRepeat("google.com"));
    });

    it('should return "xample.co"', function(){
        var resultExpected = "xample.co";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestSubstringWithoutRepeat("example.co"));
    });

    it('should return "a"', function(){
        var resultExpected = "a";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestSubstringWithoutRepeat("a"));
    });

});

describe('longestPalindromeInString', function(){
    it('should return "anana" from "bananas"', function(){
        var resultExpected = "anana";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestPalindromeInString("banana"));
    });

    it('should return "aca, ada" from "abracadabra"', function(){
        var resultExpected = "aca, ada";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestPalindromeInString("abracadabra"));
    });

    it('should return "Not match" from "chuchin"', function(){
        var resultExpected = "Not match";
        assert.deepStrictEqual(resultExpected, functionsJavascript.longestPalindromeInString("chuchin"));
    });
});

describe('doSomething', function(){
    it('should call sayHello and return "Hello!"', function(){
        var resultExpected = "Hello!";
        assert.deepStrictEqual(resultExpected, functionsJavascript.doSomething(functionsJavascript.sayHello));
    });
});

describe('chuchinEsHermosa', function(){
    it('should return "chuchinEsHermosa"', function(){
        var resultExpected = "chuchinEsHermosa";
        assert.deepStrictEqual(resultExpected, functionsJavascript.chuchinEsHermosa());
    });
});
