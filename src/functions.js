/**
 * Created by Anita on 07/12/2016.
 */
/**
 * 1. Write a JavaScript function that reverse a number.
 */

function reverseANumber(number){
    var result;
    var number = number;

    if(number.length === 1){
        result = number;
    }else{
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

function isPalindrome(string){
    var stringToAnalize = string.replace(" ", "");
    var result;

    var analize = stringToAnalize.split("").reverse().join("");

    if(stringToAnalize === analize){
        result = true;
    }else{
        result = false;
    }

    return result;
}









module.exports = {
    reverseANumber: reverseANumber,
    isPalindrome: isPalindrome
}