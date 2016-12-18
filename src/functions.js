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
 * Example string : 'dog'
 Expected Output : 'd,do,dog,o,og,g'
 */

// ONE SOLUTION

function combinationsOfWord(string) {
    var string = string;
    var resultPrimer = [];

    for(i in string){
        resultPrimer.push(combination2(string.slice(i)));
    }

    return resultPrimer.toString();
}

function combination2(string){
    var srt = string;
    var arraySrt = string.split("");
    var arrayLength = arraySrt.length;
    var result = [];

    for (var i = arrayLength; i > 0; i--) {

        var two = arraySrt.join("");
        two = two.toString();
        result.push(two);

        arraySrt.pop();
    }

    return result;
}

// TWO SOLUTIONS

function combi (string){
    var stringGive = string;
    var stringGiveToArray = stringGive.split("");
    var strLength = stringGive.length;
    var resultPrimer = [];


    for( var i = 0; i < strLength; i++){
        var str = stringGiveToArray.join("").toString();
        resultPrimer.push(combi2(str));

        stringGiveToArray.shift();
    }

    return resultPrimer.toString();
}

function combi2 (string){
    var str = string;
    var strLength = str.length;
    var result = [];

    for(var i = 1; i <= strLength; i++){
        result.push(str.slice(0, i));
    }
    return result;
}
/**
 *4. Write a JavaScript function that returns a passed string with letters in alphabetical order
 * Example string : 'webmaster' Expected Output : 'abeemrstw'
 *
 */

function alphabeticalOrder (string){
    var str = string;
    var arrayStr = str.split("");

    arrayStr = arrayStr.sort().join("");

    return arrayStr;
}


/**
 *5. Write a JavaScript function that accepts a string as a parameter and converts
 *  the first letter of each word of the string in upper case.
 *
 *Example string : 'the quick brown fox'
 *Expected Output : 'The Quick Brown Fox '
 */

function toUpperCaseFirstWord(string){
   var strArray = string.split(" ");
   var result = [];

   for(var i = 0; i < strArray.length; i++){
       var str = toUpperCase(strArray[i]);
        result.push(str);
   }
   result = result.join(" ");

   return result;
}

function toUpperCase (string){
    var str = string;
    var result;

    result = str.charAt(0).toUpperCase() + str.slice(1);

    return result;
}


/**
 *6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
 *Example string : 'Web Development Tutorial' Expected Output : 'Development'
 */

function theLongestWord(string){
    var strToArray = string.split(" ");
    var result;
    var lengthest = [];
    var otherStrings;

    strToArray.sort();
    lengthest.push(strToArray[0]);
    result = lengthest.toString();
    //---------------
    otherStrings = otherWords(strToArray);
    if(otherStrings !== ""){
        result = result + ', ' + otherStrings;
    }

    return result;
}

function otherWords(array){
    var arrayGiven = array;
    var result = [];

    for (var i = 1; i < arrayGiven.length; i++){
        if(arrayGiven[0].length === arrayGiven[i].length){
            if(arrayGiven[0] !== arrayGiven[i]){
                result.push(arrayGiven[i]);
            }
        }
    }
    result = result.toString();

    return result;
}


/**
 *
 * 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
 Example string : 'The quick brown fox'
 Expected Output : 5
 */


function howManyVowels(string){
    var str = string.toLowerCase().replace(/ +/g, "");
    var strToArray = str.split("");
    var count= 0;
    var result;

    for(var i = 0; i < strToArray.length; i++){
        count += analizeLetter(strToArray[i]);
    }
    result = count;

    return result;
}

function analizeLetter(string){
    var str = string;
    var vowels = 0;
    var arrayOfVowels = ["a", "e", "i", "o", "u"];
    var result;

    for(var i = 0; i < arrayOfVowels.length; i++){
        if(string === arrayOfVowels[i]){
            vowels +=1;
        }
    }
    result = vowels;

    return result;
}

/**
 *8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 *  Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other
 *  than 1 and itself.
 *
 */

function isPrime (number) {
    var result = "Yes";
    var number= number;
    var square = Math.sqrt(number);
    var squareUp = Math.ceil(square);

    for(var i = 2; i <= squareUp; i++){
        var numberResult = number%i;

        if(numberResult === 0){
            result = "No";
            break;
        }
    }

    return result;
}

/**
 *
 * 9. Write a JavaScript function which accepts an argument and returns the type.
 *Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 *
 * */

function whatTypeIs(something){
    var result;

    result = typeof something;

    return result;
}

/**
 *
 *10. Write a JavaScript function which returns the n rows by n columns identity matrix.
 *
 */

function matrix(number){
    var numberGiven = number;
    var makeArray;
    var makeRows;
    var result;

    makeArray = makeFormat(numberGiven);
    makeRows = makeIdentity(makeArray);
    result = makeMatrix(makeRows);

    return result;
}

function makeFormat (number){
    var numberGiven = number;
    var array = [];

    array.length = numberGiven;
    for(var i = 0; i < numberGiven; i++){
        var array2 = [];
        array2.length = numberGiven;
        array2.fill(0);
        array[i] = array2;
    }

    return array;
}

function makeIdentity(array){
    var arrayGiven = array;

    for(var i = 0; i < arrayGiven.length; i++){
        for(var j = 0; j < arrayGiven.length; j++){
            if(i === j){
                arrayGiven[i][j] = 1;
            }
        }
    }

    return arrayGiven;
}

function makeMatrix(array){
    var arrayGiven = array;
    var result = "\n";

    for(var i = 0; i < arrayGiven.length; i++){
        var rows = arrayGiven[i].join("")+"\n";
        result += rows;
    }

    return result;
}


module.exports = {

    reverseANumber: reverseANumber,
    isPalindrome: isPalindrome,
    combinationsOfWord: combinationsOfWord,
    combi: combi,
    alphabeticalOrder: alphabeticalOrder,
    toUpperCaseFirstWord: toUpperCaseFirstWord,
    theLongestWord: theLongestWord,
    howManyVowels: howManyVowels,
    isPrime: isPrime,
    whatTypeIs: whatTypeIs,
    matrix: matrix
};

