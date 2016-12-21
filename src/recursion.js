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

/**
 * 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
 * Utiliza el Algoritmo de Euclides
 */

function gcd (a, b){
    var result;

    if(!b){
        result = a;
    }else{
        result = gcd(b, a%b);
    }

    return result;
}


/**
 * 3. Write a JavaScript program to get the integers in range (x, y)
 *
 */
var range = [];
function integerBetween (a, b){
    if(!b){
        range.push(-1);
    }else if(b === a+1){
        range.push(0);
    }else{
        a+=1;
        if(a<b){
            range.push(a);
            integerBetween(a,b);
        }
    }
}


/**
 *
 *
 */












module.exports = {
    factorial: factorial,
    gcd: gcd,
    integerBetween: integerBetween
};