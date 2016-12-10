/**
 * Created by Anita on 07/12/2016.
 */
/**
 * 1. Write a JavaScript function that reverse a number.
 */

function reverseANumber(number) {
    var result;
    var number = number;

    if (number.length === 1) {
        result = number;
    } else {
        var strNumber = number.toString();
        var toReverse = strNumber.split("").reverse().join("");
        var reverseNumber = Number(toReverse);

        result = reverseNumber;
    }

    return result;
}


/**
 *Write a JavaScript function that checks whether a passed string is palindrome or not
 */

function isPalindrome(string) {
    var stringToAnalize = string.replace(" ", "");
    var result;

    var analize = stringToAnalize.split("").reverse().join("");

    if (stringToAnalize === analize) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

/**
 *Write a JavaScript function that generates all combinations of a string
 */


function combinationsOfWord(string) {
    var result = [];
    var string = string.replace(" ", "");
    var stringToArray = string.split("");
    var arrayLength = stringToArray.length;
    var arrayToAnalyze = string.split("");
    var arrayOne = arrayToAnalyze;

    for (var j = arrayLength; j > 0; j--) {
        console.log("top"+arrayLength);
        var arrayLengthOne = arrayOne.length;
        console.log("top arrayone "+arrayLengthOne);

        for (var i = arrayLengthOne; i > 0; i--) {
            console.log("for two: "+arrayOne);

            var two = arrayOne.join("");
            two = two.toString();
            result.push(two);

            arrayOne.pop();
            console.log("for two str: "+stringToArray);
        }

        stringToArray.shift();
        arrayOne = stringToArray;
        console.log("for one str: "+stringToArray);
        console.log("for one: "+arrayOne);
        console.log("bottom" +arrayLength);
    }
    console.log(result);
}


module.exports = {
    reverseANumber: reverseANumber,
    isPalindrome: isPalindrome,
    combinationsOfWord: combinationsOfWord
}

/*for(var i = arrayLength; i > 0; i--){
 var one = stringToArray.join("");
 one = one.toString();
 result.push(one);

 arrayToAnalyze.pop();
 }

 console.log(result);
 }*/