/**
 * Created by Anita on 27/11/2016.
 */


/**
 * 1. Write a JavaScript program to display the current day and time in the following format.
 Sample Output : Today is : Friday.
 Current time is : 4 PM : 50 : 22
 */

function currentDayAndTime() {
    var date = new Date();
    var day = date.getDay();
    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = date.getHours();
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + (date.getMinutes());
    var seconds = date.getSeconds() >= 10 ? date.getSeconds() : '0' + (date.getSeconds());
    var ampm;
    var strTimeAndDate;


    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    strTimeAndDate = 'Today is: ' + dayList[day] + '.\nCurrent time is: ' + hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds;


    return strTimeAndDate;

}


/**
 * 2. Write a JavaScript program to print the contents of the current window
 * */

function printCurrentPage() {
    window.print();
}


/**
 * 3. Write a JavaScript program to get the current date.
 Expected Output :
 mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyyu
 */

function currentDate() {
    var date = new Date();
    var day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();
    var month = (date.getMonth() + 1) <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var year = date.getFullYear();
    var strOne = day + '/' + month + '/' + year;
    var strTwo = day + '-' + month + '-' + year;
    var strDate = strOne + '\n' + strTwo;


    return strDate;
}

/**
 * 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 * */

function areaTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    var innerCount = s * (s - a) * (s - b) * (s - c);
    var area = parseFloat(Math.sqrt(innerCount).toFixed(2));

    return area;
}


/**
 * 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter
 from the end of the string and attaching it to the front
 */


function rotateString(string) {
    var stringToRotate = string;
    var stringLength = stringToRotate.length;

    for (var i = 0; i < stringLength; i++) {
        var lastCharacter = stringToRotate.slice(-1);
        var strWithoutLastCharacter = stringToRotate.slice(0, -1);

        stringToRotate = lastCharacter + strWithoutLastCharacter;

    }


    return stringToRotate;
}


/**
 * 6.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
 * */

function isLeapYear(number) {
    var year = number;
    var response = "";
    var yearIsInteger = Number.isInteger(year / 4);

    if (yearIsInteger) {
        response = "Yes, is a leap year";
    } else {
        response = "No, is not a leap year";
    }

    return response;
}


/**
 *7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
 */

function findAllFistJanuarySunday() {
    var start = new Date("01/01/2014");
    var end = new Date("01/01/2050");
    var allJanuaryFistSunday = [];

    for (start; start <= end; start.setFullYear(start.getFullYear() + 1)) {

        if (start.getDay() === 0) {
            allJanuaryFistSunday.push(start.toString());
        }
    }

    return allJanuaryFistSunday;

}


/**
 *8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to
 * input a guess number. If the user input matches with guess number, the program will display a message "Good Work"
 * otherwise display a message "Not matched"
 *
 */


function isMatches() {
    var userNumber = Window.prompt("Please enter a number between 1 to 10", "1");
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    var result;

    userNumber = parseInt(userNumber);

    if (userNumber === randomNumber) {
        result = "Good Work";
    } else {
        result = "Not matched";
    }

    return result;
}

/**
 * 9. Write a JavaScript program to calculate days left until next Christmas.
 *
 */

function dayLeftToChristmas() {
    var today = new Date(),
        christmasDay = "12/25/" + today.getFullYear(),
        christmasDate = new Date(christmasDay),
        oneDayInMs = 86400000,
        daysLeftToChristmas,
        differenceInMs,
        date;



    date = today.getTime();
    christmasDate = christmasDate.getTime();

    if (date > christmasDate) {
        christmasDay = "12/25/" + (today.getFullYear() + 1);
        christmasDate = new Date(christmasDay);

        differenceInMs = christmasDate - date;
        daysLeftToChristmas = Math.round(differenceInMs / oneDayInMs);

    }else if(date === christmasDate){
        daysLeftToChristmas = "Today is Christmas!";

    }else{
        differenceInMs = christmasDate - date;
        daysLeftToChristmas = Math.round(differenceInMs / oneDayInMs);
    }


    return daysLeftToChristmas;

}


/**
 *10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
 *
 */

function multiply() {
    var x = document.getElementById("firstNumber").value,
        y = document.getElementById("secondNumber").value,
        result;

    x = parseFloat(x);
    y = parseFloat(y);

    result = x * y;

    document.getElementById("result").innerHTML = result;
}


function divide() {
    var x = document.getElementById("firstNumber").value,
        y = document.getElementById("secondNumber").value,
        result;

    x = parseFloat(x);
    y = parseFloat(y);

    result = x / y;

    document.getElementById("result").innerHTML = result;
}

/* CóDIGO PARA EL HTML
 * <form>
 1° Number : <input type="text" id="firstNumber" /><br>
 2° Number: <input type="text" id="secondNumber" /><br>
 <input type="button" onClick="multiply()" Value="Multiply" />
 <input type="button" onClick="divide()" Value="Divide" />
 </form>
 <br><<br>

 <p>The Result is : <br>
 <strong id = "result"></strong>
 </p>
 *
 *
 * */

/**
 *11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 *Expected Output :
 60°C is 140 °F
 45°F is 7.222222222222222°C
 */

function toFahrenheit() {
    var celsius = document.getElementById("celsius").value;

    celsius = parseFloat(celsius);

    var result = (celsius * (9 / 5)) + 32;

    document.getElementById("result").innerHTML = celsius + "°C is" + result + "°F";
}

function toCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;

    fahrenheit = parseFloat(fahrenheit);

    var result = (fahrenheit - 32) * (5 / 9);

    document.getElementById("result").innerHTML = fahrenheit + "°F is" + result + "°C";
}


/* CóDIGO PARA EL HTML

 Celsius: <input type="text" id="celsius" /><br>
 Fahrenheit: <input type="text" id="fahrenheit" /><br>
 <input type="button" onClick="toFahrenheit()" Value="Convert To Fahrenheit" />
 <input type="button" onClick="toCelsius()" Value="Convert To Celsius" />


 <p>The Result is : <br>
 <strong id = "result"></strong>
 </p>
 *
 *
 * */

/**
 *12. Write a JavaScript program to get the website URL (loading page)
 */

function getUrl() {
    var urlCurrentPage = window.location.href;

    return urlCurrentPage;
}


module.exports = {

    currentDayAndTime: currentDayAndTime,
    printCurrentPage: printCurrentPage,
    currentDate: currentDate,
    areaTriangle: areaTriangle,
    rotateString: rotateString,
    isLeapYear: isLeapYear,
    findAllFistJanuarySunday: findAllFistJanuarySunday,
    isMatches: isMatches,
    dayLeftToChristmas: dayLeftToChristmas,
    multiply: multiply,
    divide: divide,
    toFahrenheit: toFahrenheit,
    toCelsius: toCelsius,
    getUrl: getUrl

};