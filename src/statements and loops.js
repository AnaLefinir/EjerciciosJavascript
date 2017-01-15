/**
 * Created by anita on 3/1/2017.
 */

/**
 * 1. Write a JavaScript program that accept two integers and display the larger
 *
 */

function largest(a, b) {
    var result;

    if(a > b){
        result = a;
    }else if(b > a){
        result = b;
    }else{
        result = "There are equal";
    }

    return result;
}

/**
 * 2. Write a JavaScript conditional statement to find the sign of product of three numbers.
 * Sample numbers : 3, -7, 2
 * Output : The sign is -
 */

function signOfProduct(a,b,c) {
    var result;
    var productResult = a*b*c;

    if(productResult > 0){
        result = "The sign is +";
    }else if(productResult < 0){
        result = "The sign is -";
    }else{
        result = "The sign is neutro";
    }

    return result;
}


/**
 * 3. Write a JavaScript conditional statement to sort three numbers.
 * Sample numbers : 0, -1, 4
 * Output : 4, 0, -1
 */

function sort(a,b,c) {
    var array = [a, b, c],
        result;

    array.sort(function (a,b) {
        return b-a;
    });
    result = array.join(", ");

    return result;
}

/**
 * 4. Write a JavaScript conditional statement to find the largest of five numbers.
 * Sample numbers : -5, -2, -6, 0, -1
 * Output : 0
 */

function largestOfFive(a,b,c,d,e) {
    var array = [a, b, c, d, e],
        result;

    array.sort(function(a,b){return b-a});
    result = array[0];

    return result;
}

/**
 * 5. Write a JavaScript for loop that will iterate from 0 to 15.
 * For each iteration, it will check if the current number is odd or even, and display a message to the screen.
 * Sample Output :
 * "0 is even"
 * "1 is odd"
 * "2 is even"
 */

function isEvenOrOdd() {
    var result = [];

    for(var i = 0; i < 16; i++){
        var isEven = i%2;
        if(isEven === 0){
            var strEven = i + " is even.";
            result.push(strEven);
        }else{
            var strOdd = i + " is odd.";
            result.push(strOdd);
        }
    }
    result = result.join("\n");

    return result;
}

/**
 * 6. Write a JavaScript program which compute, the average marks of the following students.
 * Then, this average is used to determine the corresponding grade.
 *
 *
 */



function grade(array) {
    var arrayLength = array.length,
        sum = 0,
        avg,
        grade,
        result;

    for(var i = 0 ; i < arrayLength; i++){
        sum += array[i][1];
    }
    avg = sum/arrayLength;
    grade = whichGrade(avg);
    result = "Grade is " + grade;

    return result;
}

function whichGrade(a) {
    var result;

    if(a < 60){
        result = "F";
    }else if (a < 70){
        result = "D";
    }else if (a < 80){
        result = "C";
    }else if (a < 90){
        result = "B";
    }else if (a < 100){
        result = "A";
    }

    return result;
}

/**
 * 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz"
 * instead of the number and for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz"
 *
 */

function crazyMultiplesOf3And5(){
    var result = [];

    for(var i = 1; i < 101; i++){
        var isMultiple3 = i%3;
        var isMultiple5 = i%5;

        if(isMultiple3===0 && isMultiple5=== 0){
            var str5and3 = i + " is FizzBuzz!.";
            result.push(str5and3);
        }else if (isMultiple5===0){
            var str5 = i + " is Buzz!.";
            result.push(str5);
        }else if (isMultiple3===0){
            var str3 = i + " is Fizz!.";
            result.push(str3);
        }else{
            result.push(i+".");
        }
    }
    result = result.join("\n");

    return result;
}

/**
 * 8. According to Wikipedia a happy number is defined by the following process :
 * "Starting with any positive integer, replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which
 * does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not
 * end in 1 are unhappy numbers (or sad numbers)".
 * Write a JavaScript program to find and print the first 5 happy numbers.
 *
 */

function happyNumbers() {
    var result;
    var arrayHappy = [];

    do{
        var i = 0;
        var numberElement = Array.from("i");
        var isHappy;
        for(var j = 0; j < numberElement.length; j++){
            Math.pow(j, 2);
        }

        ++i;
    }while(arrayHappy.length === 5);

    return result;
}

/**
 * 9. Write a JavaScript program to find the armstrong numbers of 3 digits.
 * Note : An Armstrong number of three digits is an integer such that the sum
 * of the cubes of its digits is equal to the number itself. For example, 371 is an
 * Armstrong number since 3**3 + 7**3 + 1**3 = 371.
 */

function armstrongNumber() {
    var result = [];

    for(var i = 100; i < 1000; i++){
        var isArmstrong = Array.from(i.toString());
        var count = Math.pow(isArmstrong[0], 3) + Math.pow(isArmstrong[1], 3) + Math.pow(isArmstrong[2], 3);

        if(count === i){
            result.push(i);
        }
    }

    result = result.join(", ");
    return result;
}

/**
 * 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
 *
 * *
 * * *
 * * * *
 * * * * *
 */

function triangleStar() {
    var stars;
    var result;

    for(var i = 1; i < 6; i++){
        for(var j = 0 ; j < i ;j++){
            stars = (stars === undefined) ? "*" : stars += "*";
        }
        result = (result === undefined) ? stars+"\n" : result += stars+"\n";
        stars="";
    }

    return result;
}

/**
 * 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
 *
 */

function gcd(a, b){
    while(a !== b){

        if(a > b){
            a = a-b;
        }else{
            b = b - a;
        }
    }

    return a;
}

/**
 * 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
 *
 */

function sumMultiplesOf3and5 (){
    var sum = 0;

    for(var i = 0; i < 1000; i++){
        var isMultiple3 = i%3;
        var isMultiple5 = i%5;

        if(isMultiple3 === 0 || isMultiple5 === 0){
            sum += i;
        }
    }

    return sum;
}

module.exports = {
    largest: largest,
    signOfProduct: signOfProduct,
    sort: sort,
    largestOfFive: largestOfFive,
    isEvenOrOdd: isEvenOrOdd,
    grade: grade,
    armstrongNumber: armstrongNumber,
    triangleStar: triangleStar,
    gcd: gcd,
    sumMultiplesOf3and5: sumMultiplesOf3and5

};
