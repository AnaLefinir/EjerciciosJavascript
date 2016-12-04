/**
 * Created by Anita on 27/11/2016.
 */
function sayPepe() {
    return "Pepe!";
}
/* 1. Write a JavaScript program to display the current day and time in the following format.
 Sample Output : Today is : Friday.
 Current time is : 4 PM : 50 : 22
 */

function currentDayandTime() {
    var date = new Date();
    var day = date.getDay();
    var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm;
    var strTimeAndDate;
    //var dayString;


    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    strTimeAndDate = 'Today is: ' + dayList[day] + '.\nCurrent time is: ' + hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds;

    console.log(strTimeAndDate);

    return strTimeAndDate;

    /*switch (day) {
     case 0:
     dayString = "Domingo";
     break;

     case 1:
     dayString = "Lunes";
     break;

     case 2:
     dayString = "Martes";
     break;

     case 3:
     dayString = "Miercoles";
     break;

     case 4:
     dayString = "Jueves";
     break;

     case 5:
     dayString = "Viernes";
     break;

     case 6:
     dayString = "Sábado";
     break;
     }*/
}



/*2. Write a JavaScript program to print the contents of the current window */

function printCurrentPage(){
    window.print();
}


/*3. Write a JavaScript program to get the current date.
 Expected Output :
 mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyyu
*/

function currentDate(){
    var date = new Date();
    var day = date.getDate() <= 9 ? '0'+date.getDate() : date.getDate();
    var month = (date.getMonth()+1) <= 9 ? '0'+(date.getMonth()+1) : (date.getMonth() + 1);
    var year = date.getFullYear();
    var strOne = day + '/' + month + '/' + year;
    var strTwo = day + '-' + month + '-' + year;
    var strDate = strOne + '\n' + strTwo;

    console.log(strOne);
    console.log(strTwo);

    return strDate;
}

/* 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

function areaTriangle(a, b, c){
    var s = (a+b+c)/2;
    var innerCount = s*(s-a)*(s-b)*(s-c);
    var area = Math.sqrt(innerCount);

    console.log(area);

    return area;
}


/*5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter
 from the end of the string and attaching it to the front */


function rotateString(string){
    var stringToRotate = string;
    var stringLength = stringToRotate.length;

    for(var i = 0; i< stringLength; i++){
        var lastCharacter = stringToRotate.slice(-1);
        var strWithoutLastCharacter =stringToRotate.slice(0, -1);

        stringToRotate= lastCharacter + strWithoutLastCharacter;
        console.log(stringToRotate);
    }

    console.log("the result is: "+ stringToRotate);
    return stringToRotate;
}



/* 6.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar */

function isLeapYear(number){
    var year = number;
    var response= "";
    var yearIsInteger = Number.isInteger(year/4);
    console.log(yearIsInteger);

    if(yearIsInteger){
        response = "Yes, is a leap year";
    }else{
        response ="No, is not a leap year";
    }

    console.log(response);
    return response;
}


/**
 *7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
 */

function  findAllFistJanuaryMonday(){
    var start = new Date("01/01/2014");
    var end = new Date ("01/01/2050");
    var allJanuaryFistMonday = [];

    for(start; start <= end ; start.setFullYear(start.getFullYear()+1)){

        if(start.getDay() === 1){
            allJanuaryFistMonday.push(start.toString());
        }
    }

    return allJanuaryFistMonday;

}












module.exports = {
    sayPepe: sayPepe
};