let { numberOperations } = require("./NumberOperations.js");
let { assert, expect } = require('chai');


describe("Number Operations", function () {
    describe("numberChecker", function () {
        it("must throw an exception if input is not a number", function () {
            expect(() => numberOperations.numberChecker(NaN)).to.throw(Error, 'The input is not a number!');
        });
        it("must return the correct message based on the input", function () {
            let lowerThan100 = numberOperations.numberChecker(34);
            let greaterThan100 = numberOperations.numberChecker(101);
            let equalTo100 = numberOperations.numberChecker(100);
            expect(lowerThan100).to.equal("The number is lower than 100!");
            expect(greaterThan100).to.equal("The number is greater or equal to 100!");
            expect(equalTo100).to.equal("The number is greater or equal to 100!");
        });
    });
    describe("powNumber", function () {
        it("must return the correct result", function () {
            let result = numberOperations.powNumber(2);
            expect(result).to.equal(4);
        });
    });
    describe("sumOfArrays", function () {
        it("must return the correct result when length is equal", function () {
            let result = numberOperations.sumArrays([1, 2], [3, 4]);
            expect(result).to.deep.equal([4, 6]);
        });
        it("must return the correct result when length is NOT  equal", function () {
            let firstIsLonger = numberOperations.sumArrays([1, 2, 4], [3, 4]);
            expect(firstIsLonger).to.deep.equal([4, 6, 4]);
            let secondIsLonger = numberOperations.sumArrays([1, 2], [3, 4, 5]);
            expect(secondIsLonger).to.deep.equal([4, 6, 5]);
        });
        it("must return an empty array if input is empty", function () {
            let result = numberOperations.sumArrays([], []);
            expect(result).to.deep.equal([]);
        });
    });

});

