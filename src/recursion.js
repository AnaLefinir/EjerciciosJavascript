/**
 * Created by anita on 21/12/2016.
 */


/**
 * 1. Write a JavaScript program to calculate the factorial of a number.
 *
 */

function factorial(number) {
    var numberGiven = number,
        result;

    if (numberGiven === 1) {
        result = 1;
    } else {
        result = numberGiven * factorial(number - 1);
    }

    return result;
}

/**
 * 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
 * Utiliza el Algoritmo de Euclides
 */

function gcd(a, b) {
    var result;

    if (!b) {
        result = a;
    } else {
        result = gcd(b, a % b);
    }

    return result;
}


/**
 * 3. Write a JavaScript program to get the integers in range (x, y)
 *
 */

//Hecho por FRANI.


function range(start, end) {
    var array = [];
    var diff = end - start;

    if (diff > 1) {
        var nextStart = ++start;
        array.push(nextStart);
        var nextRange = range(nextStart, end);
        array = array.concat(nextRange);
    }

    return array;
}

/**
 * 4. Write a JavaScript program to compute the sum of an array of integers
 * Example : var array = [1, 2, 3, 4, 5, 6]
 * Expected Output : 21
 */

function sumOfArray(array) {
    var arrayGiven = array,
        result;
    if(arrayGiven.length === 1){
        result = arrayGiven[0];
    }else if(arrayGiven.length > 1){
        result = arrayGiven[0] + sumOfArray(arrayGiven.slice(1));
    }
    return result;
}


module.exports = {
    factorial: factorial,
    gcd: gcd,
    range: range
};
