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
 * Display an alert box with the specified sign.
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







module.exports = {
    largest: largest,
    signOfProduct: signOfProduct

};
