let { dealership } = require("./dealership.js");
let { assert, expect } = require('chai');

describe("dealershio", function () {
    describe("newCarCost", function () {

        it("It should return the discounted price based on car model", () => {
            let result1 = dealership.newCarCost('Audi A4 B8', 40000);
            let result2 = dealership.newCarCost('Audi A6 4K', 40000);
            let result3 = dealership.newCarCost('Audi A8 D5', 40000);
            let result4 = dealership.newCarCost('Audi TT 8J', 40000);
            
            expect(result1).to.equal(25000);
            expect(result2).to.equal(20000);
            expect(result3).to.equal(15000);
            expect(result4).to.equal(26000);
        });
        it("It should return no discount if owdCarModel offers no discount based on input", () => {
            let result1 = dealership.newCarCost('else', 40000);
            let result2 = dealership.newCarCost(10, 40000);
            let result3 = dealership.newCarCost([], 40000);
            let result4 = dealership.newCarCost({}, 40000);
            
            expect(result1).to.equal(40000);
            expect(result2).to.equal(40000);
            expect(result3).to.equal(40000);
            expect(result4).to.equal(40000);
        });
    });
    describe("carEquipment", function() {
        it("Should return correctly selected extras", () => {
           let result = dealership.carEquipment(['ac', 'heated seats'], [0,1]);
           expect(result).to.deep.equal(['ac', 'heated seats']);
        });
        it("Should return an empty array if no extras are chosen", () => {
            let result = dealership.carEquipment(['ac', 'heated seats'], []);
            expect(result).to.deep.equal([]);
         });
         it("Should return an empty array if no such index exists", () => {
            let result = dealership.carEquipment(['ac', 'heated seats'], [2,4]);
            expect(result).to.deep.equal([undefined, undefined]);
         });
     });
     describe("euroCategory", function() {
        it("Should give no discount when category is less than 4", () => {
           let result = dealership.euroCategory(3);
           expect(result).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it("Should give 5% discount when category is avove 4", () => {
            let result = dealership.euroCategory(4);
            let result2 = dealership.euroCategory(5);
            expect(result).to.equal('We have added 5% discount to the final price: 14250.');
            expect(result).to.equal('We have added 5% discount to the final price: 14250.');
         });
       
     });



});
