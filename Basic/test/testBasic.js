/**
 * Created by Anita on 27/11/2016.
 */
var assert = require("assert"),
    basicJavascript = require("../src/main.js"),
    sinon = require('sinon');

describe('currentDayAndTime', function () {
    it('should set the correct value(am) in ampm variable', sinon.test(function () {
        var dateAM = new Date("Wed Mar 25 2015 09:56:24 GMT-0300 (Argentina Standard Time)");
        var clock = sinon.useFakeTimers(dateAM.getTime());

        assert.equal ('Today is: Wednesday.\nCurrent time is: 9 AM : 56 : 24', basicJavascript.currentDayAndTime())
    }));

    it('should set the correct value(pm) in ampm variable', sinon.test(function () {
        var datePM = new Date("Wed Mar 25 2015 18:56:24 GMT-0300 (Argentina Standard Time)");
        var clock = sinon.useFakeTimers(datePM.getTime());

        assert.equal ('Today is: Wednesday.\nCurrent time is: 6 PM : 56 : 24', basicJavascript.currentDayAndTime())

    }));

    it('should set the correct value(0 AM) in ampm and hours variables', sinon.test(function () {
        var datePM = new Date("12/07/2016");
        var clock = sinon.useFakeTimers(datePM.getTime());

        assert.equal ('Today is: Wednesday.\nCurrent time is: 0 AM : 00 : 00', basicJavascript.currentDayAndTime())

    }));
});

describe('printCurrentPage', function () {

});


describe('currentDate', function () {
    it('should set the correct output for 12/06/2016', sinon.test(function () {
        var dateAM = new Date("12/06/2016");
        var clock = sinon.useFakeTimers(dateAM.getTime());

        assert.equal ('06/12/2016\n06-12-2016', basicJavascript.currentDate())
    }));

    it('should set the correct output for 12/28/2016', sinon.test(function () {
        var dateAM = new Date("12/28/2016");
        var clock = sinon.useFakeTimers(dateAM.getTime());

        assert.equal ('28/12/2016\n28-12-2016', basicJavascript.currentDate())
    }));

});


describe('areaTriangle', function () {
    it('should be equal to result: 0', function () {
        assert.equal (0, basicJavascript.areaTriangle(1, 2, 3))
    });

    it('should be equal to result: 3.9', function () {
        assert.equal (3.9, basicJavascript.areaTriangle(3, 3, 3))
    });
});


describe('rotateString', function () {
    it('should result the same string from argument: "123456789"', function()
    {
        assert.equal ("123456789", basicJavascript.rotateString("123456789"))
    }
    )
    ;

    it('should result the same string from argument: "A"', function () {
        assert.equal ("A", basicJavascript.rotateString("A"))
    });
});

describe('isLeapYear', function () {
    it('should result a leap year the argument: 2016', function () {
        assert.equal ("Yes, is a leap year", basicJavascript.isLeapYear(2016))
    });

    it('should NOT result a leap year the argument: 2017', function () {
        assert.equal ("No, is not a leap year", basicJavascript.isLeapYear(2017))
    });
});


describe('findAllFistJanuarySunday', function () {
    it('should result a array of 5 members', function () {
        var arrayOfYear = basicJavascript.findAllFistJanuarySunday();
        assert.equal (5, arrayOfYear.length);
    });

    it('should result the year 2040 from index 3 of arrayOfYear', function () {
        var arrayOfYear = basicJavascript.findAllFistJanuarySunday();
        assert.equal ("Sun Jan 01 2040 00:00:00 GMT-0300 (Argentina Standard Time)", arrayOfYear[3]);
    });
});

/*
describe('isMatches', function () {
    it('should result a "Good Work"', sinon.test(function(){
        sinon.stub(Math, "random", function(){
            return 0.01;
        });

        //No funciona el stub de window y no se como carajo hacerlo funcionar.
        //Tampoco encuentro info.
        sinon.stub(Window, "prompt", function(){return(6)});
        assert.equal("Good Work", basicJavascript.isMatches());
    }));

});

*/

describe('dayLeftToChristmas', function () {
    it('should result a 358 days', sinon.test(function(){
        var date = new Date("01/01/2015"),
            clock = sinon.useFakeTimers(date.getTime());

        assert.equal(358, basicJavascript.dayLeftToChristmas());

    }));

    it('should result a 19 days', sinon.test(function(){
        var today = new Date("12/06/2016"),
            clock = sinon.useFakeTimers(today.getTime());

        assert.equal(19, basicJavascript.dayLeftToChristmas());

    }));
});


describe('dayLeftToChristmas', function () {
    it('should result a 358 days', sinon.test(function(){
        var date = new Date("01/01/2015"),
            clock = sinon.useFakeTimers(date.getTime());

        assert.equal(358, basicJavascript.dayLeftToChristmas());

    }));

    it('should result a 19 days', sinon.test(function(){
        var date = new Date("12/06/2016"),
            clock = sinon.useFakeTimers(date.getTime());

        assert.equal(19, basicJavascript.dayLeftToChristmas());

    }));

    it("should result a 364 days", sinon.test(function(){
        var date = new Date("12/26/2014"),
            clock =  clock = sinon.useFakeTimers(date.getTime());

        assert.equal(364, basicJavascript.dayLeftToChristmas());
    }));

    it("should result a 0 days", sinon.test(function(){
        var date = new Date("12/25/2014"),
            clock =  clock = sinon.useFakeTimers(date.getTime());

        assert.equal("Today is Christmas!", basicJavascript.dayLeftToChristmas());
    }));
});



describe('multiply', function () {
    it('should result 4', sinon.test(function(){

        sinon.stub(document, "getElementById").withArgs('#firstNumber').returns({val: "2"});
        sinon.stub(document, "getElementById").withArgs('#secondNumber').returns({val: "2"});

        basicJavascript.multiply();

        assert.equal(4, sinon.stub(document, "getElementById").withArgs("#result").innerHTML);

    }));

});

/*

 currentDayAndTime
 printCurrentPage
 currentDate
 areaTriangle
 rotateString
 isLeapYear
 findAllFistJanuarySunday
 isMatches
 dayLeftToChristmas

 multiply    divide

 toFahrenheit    toCelsius

 getUrl
 */