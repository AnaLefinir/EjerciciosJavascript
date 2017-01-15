/**
 * Created by anita on 11/1/2017.
 */
/**
 * 1. Write a JavaScript function to check whether an `input` is an array or not.
 *
 */

function isArray(a) {
    var result;

    result = Array.isArray(a);

    return result;
}

/**
 * 2. Write a JavaScript function to clone an array.
 *
 */

function copyArray(a) {
    return a;
}

/**
 * 3. Write a JavaScript function to get the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 *
 */

function firstElement(array, n) {
    var result = (n === undefined) ? array[0] : array.slice(0,n);

    return result;
}

/**
 * 4. Write a JavaScript function to get the last element of an array.
 * Passing a parameter 'n' will return the last 'n' elements of the array.
 *
 */

function lastElement(array, n) {
    var result = (n === undefined) ? array[array.length -1] : array.slice(array.length-n);

    return result;
}

/**
 * 5. Write a simple JavaScript program to join all elements of the following array into a string.
 *
 */

//Con join()

/**
 * 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 * For example if you accept 025468 the output should be 0-254-6-8.
 *
 */

function addDashes(number) {
    var arrayOfNumber = Array.from(number.toString());
    var str;
    for(var i = 0; i < arrayOfNumber.length; i++){
        if(arrayOfNumber[i]%2 === 0 && i !== arrayOfNumber.length-1){
            str = (str === undefined) ? arrayOfNumber[i]+"-" : str + arrayOfNumber[i] + "-";
        }else{
            str = (str === undefined) ? arrayOfNumber[i]: str + arrayOfNumber[i];
        }
    }

    return str;
}

/**
 * 8. Write a JavaScript program to find the most frequent item of an array.
 *
 */

function frequentItem(array){
    var element;
    var repeat = 0;


    array.sort();
    for(var i = 0; i < array.length; i++){
        var count = 0;
        for (var j=i+1; j< array.length; j++) {
            if (array[i] == array[j]){
                count++;
            }else{
                i = j;
            }
        }

        if(count > repeat){
            repeat = count;
            element = array[i];
        }

    }
    var result = element + " is repeat " + repeat + " times.";
    return result;
}