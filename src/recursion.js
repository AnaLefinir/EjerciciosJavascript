/**
 * Created by anita on 21/12/2016.
 */


/**
 * 1. Write a JavaScript program to calculate the factorial of a number.
 *
 */

function factorial (number) {
    var numberGiven = number,
        result;

    if(numberGiven === 1){
        result = 1;
    }else{
        result = numberGiven * factorial(number-1);
    }

    return result;
}























module.exports = {
    factorial: factorial
};