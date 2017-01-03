/**
 * Created by anita on 3/1/2017.
 */
var assert = require("assert"),
    loopsJavascript = require("../src/statements and loops.js"),
    sinon = require('sinon');

describe('largest', function () {
    it('should return 4',function () {
        var resultExpect = 4;
        assert.deepStrictEqual(resultExpect, loopsJavascript.largest(2,4));
    });

    it('should return "There are equal"',function () {
        var resultExpect = "There are equal";
        assert.deepStrictEqual(resultExpect, loopsJavascript.largest(4,4));
    });

    it('should return 0',function () {
        var resultExpect = 0;
        assert.deepStrictEqual(resultExpect, loopsJavascript.largest(0,-1));
    });
});



describe('signOfProduct', function () {
    it('should return negative sign',function () {
        var resultExpect = "The sign is -";
        assert.deepStrictEqual(resultExpect, loopsJavascript.signOfProduct(3,-2,1));
    });

    it('should return positive sign',function () {
        var resultExpect = "The sign is +";
        assert.deepStrictEqual(resultExpect, loopsJavascript.signOfProduct(-3,-2,1));
    });

    it('should return neutro sign',function () {
        var resultExpect = "The sign is neutro";
        assert.deepStrictEqual(resultExpect, loopsJavascript.signOfProduct(-3,2,0));
    });
});



describe('sort', function () {
    it('shoult return "4, 0, -1"',function () {
        var resultExpect = "4, 0, -1";
        assert.deepStrictEqual(resultExpect, loopsJavascript.sort(0,-1,4));
    });

    it('shoult return "0, -1, -2"',function () {
        var resultExpect = "0, -1, -2";
        assert.deepStrictEqual(resultExpect, loopsJavascript.sort(0,-1,-2));
    });
});


describe('largestOfFive', function () {
    it('should return 0',function () {
        var resultExpect = 0;
        assert.deepStrictEqual(resultExpect, loopsJavascript.largestOfFive(-5, -2, -6, 0, -1));
    })
});




describe('isEvenOrOdd', function () {
    it('should return a string',function () {
        var resultExpect = "0 is even.\n1 is odd.\n2 is even.\n3 is odd.\n4 is even.\n5 is odd.\n6 is even.\n7 is odd.\n8 is even.\n9 is odd.\n10 is even.\n11 is odd.\n12 is even.\n13 is odd.\n14 is even.\n15 is odd." ;
        assert.deepStrictEqual(resultExpect, loopsJavascript.isEvenOrOdd());
    })
});



describe('grade', function () {
    it('should return grade B',function () {
        var studentsMarks = [["David", 80],["Vinoth", 77],["Divya", 88],["Ishitha", 95],["Thomas", 68]];
        var resultExpect =  "Grade is B";
        assert.deepStrictEqual(resultExpect, loopsJavascript.grade(studentsMarks));
    })
});


/*
describe('...', function () {
    it('',function () {
        var resultExpect;
        assert.deepStrictEqual(resultExpect, loopsJavascript);
    })
});

describe('...', function () {
    it('',function () {
        var resultExpect;
        assert.deepStrictEqual(resultExpect, loopsJavascript);
    })
});

describe('...', function () {
    it('',function () {
        var resultExpect;
        assert.deepStrictEqual(resultExpect, loopsJavascript);
    })
});

describe('...', function () {
    it('',function () {
        var resultExpect;
        assert.deepStrictEqual(resultExpect, loopsJavascript);
    })
});

describe('...', function () {
    it('',function () {
        var resultExpect;
        assert.deepStrictEqual(resultExpect, loopsJavascript);
    })
});
*/







