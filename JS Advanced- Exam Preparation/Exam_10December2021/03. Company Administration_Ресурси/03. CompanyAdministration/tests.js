let { companyAdministration } = require("./companyAdministration.js");
let { assert, expect } = require('chai');

describe("companyAdministration", function () {
    describe("firedEmployee", function () {
        it("It should throw an error if input is invalid", function () {
            expect(() => companyAdministration.firedEmployee({}, NaN)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(null, 1)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee('array', 1)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Ivo'], '1')).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([], 0.5)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Ivo'], 2)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([], null)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee([], undefined)).to.throw(`Invalid input`);
        });
        it("It should return the modified array after firing an employee", function () {
           let result = companyAdministration.firedEmployee(['Ivo', 'Pesho'], 0);
           expect(result).to.equal('Pesho');
            let result2 = companyAdministration.firedEmployee(['Ivo', 'Pesho', 'Gosho'], 0);
            expect(result2).to.equal('Pesho, Gosho');
        });
    });
    
    describe("HiringEmployee", function () {
        it("It should throw an error if position != programmer", function () {
            expect(() => companyAdministration.hiringEmployee('Ivo', 'QA', 5)).to.throw(`We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Ivo', 'programmer', 5)).to.throw(`We are not looking for workers for this position.`);
        });
        it("It should reject the applicant if experience is insufficient", function () {
            let result = companyAdministration.hiringEmployee('Ivo', 'Programmer', 2);
            expect(result).to.equal(`Ivo is not approved for this position.`);
        });
        it("It should accept an  applicant if experience is sufficient", function () {
            let result = companyAdministration.hiringEmployee('Ivo', 'Programmer', 5);
            expect(result).to.equal(`Ivo was successfully hired for the position Programmer.`);
            let result2 = companyAdministration.hiringEmployee('Ivo', 'Programmer', 3);
            expect(result2).to.equal(`Ivo was successfully hired for the position Programmer.`);
        });
    });

    describe("calculateSalary", function () {
        it("It should calculate correctly without the bonus", function () {
            let salary1 = companyAdministration.calculateSalary(160);
            expect(salary1).to.equal(2400);
            let salary = companyAdministration.calculateSalary(0);
            expect(salary).to.equal(0);
        });
        it("It should add the bonus where the hours are more than 160", function () {
            let salary = companyAdministration.calculateSalary(161);
            expect(salary).to.equal(3415);
        });
        it("It should throw an error if input is invalid", function () {
            expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary({})).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary(null)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary('3')).to.throw(`Invalid hours`);
        });
    });

    
});

console.log(158.5 * 15);