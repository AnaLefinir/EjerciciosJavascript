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


module.exports = {
    largest: largest,
    signOfProduct: signOfProduct,
    sort: sort

};
