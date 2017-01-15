/**
 * Created by anita on 11/1/2017.
 */
/**
 * 1. Write a JavaScript program to list the properties of a JavaScript object.
 *
 */

function properties (object){
    var objectGiven = object;
    var result = Object.keys(objectGiven).join(", ");

    return result;
}

/**
 * 2. Write a JavaScript program to delete the rollno property from the following object.
 * Also print the object before or after deleting the property
 *
 */

function deleteRollno(object){
    delete object.rollno;

    return object;
}

/**
 * 3. Write a JavaScript program to get the length of an JavaScript object.
 *
 */

function objLength(object) {
    var length = 0;

    for (key in object){
        length++;
    }

    return length;
}

/**
 * 4. Write a JavaScript program to display the reading status
 * (i.e. display book name, author name and reading status) of the following books
 *
 */

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function readingStatus(array){
    var result = "";
    for(var i = 0; i < array.length; i++){
        if(array[i].readingStatus === true){
            var str = "Already read " + array[i].title + " by " + array[i].author + ".\n";
            result += str;
        }else{
            var str = "You still need to read" + array[i].title + " by " + array[i].author + ".\n";
            result += str;
        }
    }

    return result;
}

/**
 * 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
 *
 */

function Cylinder(height, diameter) {
    this.height = height;
    this.diameter = diameter;
    this.volumen =  function(){
        var radius = this.diameter/2;

        var volume = Math.PI*Math.pow(radius, 2)*this.height;

        return volume.toFixed(4);
    }
}


/**
 * 6. Write a Bubble Sort algorithm in JavaScript.
 *
 */

//Ya lo hice.

/**
 * 7. Write a JavaScript program which returns a subset of a string.
 *
 */

//Ya lo hice.

/**
 * 8. Write a JavaScript program to create a Clock.
 *
 */

//Tricky...

/**
 * 9. Write a JavaScript program to calculate the area and perimeter of a circle
 *
 */

function Circle(radius)
{
    this.radius = radius;
    this.area = function ()
    {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}

/**
 * 10. Write a JavaScript program to sort an array of JavaScript objects.
 *
 */

var library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

function sortByTitle(array) {

    array.sort(function(a,b){
        return b.libraryID-a.libraryID;
    });

    return array;
}

/**
 * 11. Write a JavaScript function to print all the methods in an JavaScript object
 *
 */

function allMethods(object) {
    return Object.getOwnPropertyNames(object);
}

/**
 * 12. Write a JavaScript function to parse an URL.
 *
 */

//Tricky

/**
 * 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
 *
 */

function getProperties(object) {
    var str = [];

    for(key in object){
        str.push(key);
    }

    return str;
}

function Person (name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.puchun = "hermosa";

var ana = new Person(ana, 27);

/**
 * 14. Write a JavaScript function to retrieve all the values of an object's properties.
 *
 */

function getPropertiesValue(obj){
    var array = [];
    for(key in obj){
        array.push(obj[key]);
    }
    return array;
}

/**
 * 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs
 *
 */

function keyAndValue (object) {
    var length = objLength(object);
    var array = [];
    var key = getProperties(object);
    var value = getPropertiesValue(object);

    for(var i= 0; i < length; i++){
        var element = [key[i], value[i]];
        array.push(element);
    }

    return array;
}


/**
 * 16. Write a JavaScript function to get a copy of the object where the keys have become the
 * values and the values the keys.
 *
 */


function objRare (object) {
    var length = objLength(object);
    var key = getProperties(object);
    var value = getPropertiesValue(object);
    var objNew = {};

    for(var i= 0; i < length; i++){
        objNew[value[i]] = key[i];
    }

    return objNew;
}

/**
 * 17. Write a JavaScript function to check if an object contains given property.
 *
 */

function checkProperty(obj, property){
    var result = false;

    for(key in obj){
        if(key === property){
            result = true;
        }
    }

    return result;
}
/**
 * 18. Write a JavaScript function to check whether a given value is a DOM element.
 *
 */

