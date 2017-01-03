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
        result = 0;

    if(arrayGiven.length === 1){
        result = arrayGiven[0];
    }else if(arrayGiven.length > 1){
        result = arrayGiven[0] + sumOfArray(arrayGiven.slice(1));
    }

    return result;
}

/**
 * 5. Write a JavaScript program to compute the exponent of a number.
 *
 */

function baseToExponent(base, exponent) {
    var result;

    if(exponent === 1){
        result = base;
    }else if(exponent > 1){
        var newExponent = --exponent;
        result = base * baseToExponent(base, newExponent);
    }else if(exponent === 0){
        result = 1;
    }

    return result;
}

/**
 * 6. Write a JavaScript program to get the first n Fibonacci numbers.
 *
 */
//Una manera

function fibonacci(length){
    var array = [];

    array.length = length;
    for(var i = 0; i < array.length; i++){
        array[i] = fib(i+1);
    }

    return array;
}

function fib(n) {
    var result;

    if(n===1){
        result = 0;
    }else if (n===2){
        result = 1;
    }else if(n > 2){
        result = fib(n-1) + fib(n-2);
    }

    return result;
}

//Otra manera que sea en una funcion... NO ME SALE. Solución FRANI

var fibonacci_series = function (n)
{
    var s;
    if (n === 1) {
        s = [0];
    } else if (n === 2) {
        s = [0, 1];
    } else {
        s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
    }
    return s;
};

/**
 * 7. Write a JavaScript program to check whether a number is even or not.
 *
 */

function isEven (number){
    var result;

    if(number === 0){
        result = true;
    }else if(number >= 2){
        result = isEven(number-2);
    }else if(number < 0){
        result = isEven(number+2);
    }else{
        result = false;
    }

    return result;
}

/**
 * 8. Write a JavaScript program for binary search
 *
 */

function binarySearch(number, array, indexS, indexE) {
    var start = (indexS === undefined) ? 0 : indexS,
        end = (indexE === undefined) ? (array.length - 1) : indexE,
        middle = Math.floor((start+end)/2),
        result;

    if(array[middle] === number){
        result = middle;
    }else if(number > array[middle]){
        result = binarySearch(number, array, middle+1);
    }else if(number < array[middle]){
        result = binarySearch(number, array, 0, middle-1);
    }

    return result;
}


/**
 * 9. Write a merge sort program in JavaScript.
 *
 */

function mergeSort(array, again){
    var index = 0;
    var again = (again === undefined) ? true : again;

    if(d){

    }else if(d){

    }
}
module.exports = {
    factorial: factorial,
    gcd: gcd,
    range: range,
    sumOfArray: sumOfArray,
    baseToExponent: baseToExponent,
    fibonacci: fibonacci,
    isEven: isEven,
    binarySearch: binarySearch,
    mergeSort: mergeSort
};
