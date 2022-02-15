let { testNumbers } = require("./testNumbers.js");
let { assert, expect } = require('chai');

describe("testNumbers", function () {
    describe("sumNumber", function () {
        it("should return undefined if input is not a number", function () {
            let result1 = testNumbers.sumNumbers('2', 2);
            let result2 = testNumbers.sumNumbers(2, '2');
            expect(result1).to.deep.equal(undefined);
            expect(result2).to.deep.equal(undefined);
        });
        it("should return the correct number is ", function () {
            let result1 = testNumbers.sumNumbers(2, 2);
            let result2 = testNumbers.sumNumbers(-1, -1);
            expect(result1).to.equal('4.00');
            expect(result2).to.equal('-2.00');
        });
    });
    describe("numberChecker", function () {
        it("should throw an error if input is not a number", function () {
            expect(() => testNumbers.numberChecker(NaN)).to.throw(Error, "The input is not a number!");
        });
        it("should return the correct message for odd and even numbers", function () {
           let even = testNumbers.numberChecker(8);
           let odd = testNumbers.numberChecker(7);
           expect(even).to.equal("The number is even!");
           expect(odd).to.equal("The number is odd!" );
        });
        it("should return the correct message for odd and even numbers after parse validation", function () {
            let even = testNumbers.numberChecker('8');
            let odd = testNumbers.numberChecker('7');
            expect(even).to.equal("The number is even!");
            expect(odd).to.equal("The number is odd!" );
         });
    });
    describe("averageSumArray", function () {
        it("should return the average sum of the items in the array", function () {
            let result = testNumbers.averageSumArray([2,3,4]);
            expect(result).to.deep.equal(3);
        });
        it("should return 0 if input is empty", function () {
            let result = testNumbers.averageSumArray([]);
            expect(result).to.deep.equal(NaN);
        });
    });
});
