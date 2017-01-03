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
    })
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







