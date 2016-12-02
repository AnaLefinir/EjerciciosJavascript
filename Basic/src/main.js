/**
 * Created by Anita on 27/11/2016.
 */
function sayPepe() {
    return "Pepe!";
}

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

function printCurrentPage(){
    window.print();
}

function currentDate(){
    
}
module.exports = {
    sayPepe: sayPepe
};