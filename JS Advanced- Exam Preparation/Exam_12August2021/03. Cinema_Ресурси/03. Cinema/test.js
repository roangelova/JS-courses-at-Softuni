let { cinema } = require("./cinema.js");
let { assert, expect } = require('chai');

describe("Cinema", function () {
    describe("showMovies", function () {
        it("Should display the correct message if there are no movies", () => {
            let result = cinema.showMovies([]);
            expect(result).to.equal("There are currently no movies to show.");
        });
        it("Should display the movies if such are available", () => {
            let result = cinema.showMovies(['King Kong', 'Joker']);
            expect(result).to.equal("King Kong, Joker");
        });
    });
    describe("ticketPrice", function () {
        it("Should throw an error if projection type is invalid", () => {
            expect(() => cinema.ticketPrice('else')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice(null)).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice(undefined)).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice([])).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice({})).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice(12)).to.throw(Error, 'Invalid projection type.');
        });
        it("Should return the correct price if type is correct", () => {
            let result = cinema.ticketPrice('Premiere');
            expect(result).to.equal(12.00);
            let result2 = cinema.ticketPrice('Normal');
            expect(result2).to.equal(7.50);
            let result3 = cinema.ticketPrice('Discount');
            expect(result3).to.equal(5.50);
        });
    });
    describe("swapSeatsInHall", function () {
        it("Should returns an error message if input is not an integer", () => {
            let errorMessage = cinema.swapSeatsInHall('2', 3);
            let errorMessage2 = cinema.swapSeatsInHall(2, '3');
            //let errorMessage3 = cinema.swapSeatsInHall('2', '3');
            let errorMessage4 = cinema.swapSeatsInHall(null, 3);
            let errorMessage5 = cinema.swapSeatsInHall(undefined, 3);
            let errorMessage6 = cinema.swapSeatsInHall(3, null);
            let errorMessage7 = cinema.swapSeatsInHall(3, undefined);
            expect(errorMessage).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage2).to.equal("Unsuccessful change of seats in the hall." );
            //expect(errorMessage3).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage4).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage5).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage6).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage7).to.equal("Unsuccessful change of seats in the hall." );
        });
        it("Should returns an error message if one of the numbers is greater than 20", () => {
            let errorMessage = cinema.swapSeatsInHall(25, 3);
            let errorMessage2 = cinema.swapSeatsInHall(3, 21);
            expect(errorMessage).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage2).to.equal("Unsuccessful change of seats in the hall." );
        });
        it("Should returns an error message if seats are less or equal to zero", () => {
            let errorMessage = cinema.swapSeatsInHall(4, -1);
            let errorMessage2 = cinema.swapSeatsInHall(-1, 4);
            let errorMessage3 = cinema.swapSeatsInHall(4, 0);
            let errorMessage4 = cinema.swapSeatsInHall(0, 4);
            expect(errorMessage).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage2).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage3).to.equal("Unsuccessful change of seats in the hall." );
            expect(errorMessage4).to.equal("Unsuccessful change of seats in the hall." );
        });
        it("Should returns an error message if numbers are the same", () => {
            let errorMessage = cinema.swapSeatsInHall(3, 3);
            expect(errorMessage).to.equal("Unsuccessful change of seats in the hall." );
        });
        it("Should returns a success message if seats can be swapped", () => {
            let message = cinema.swapSeatsInHall(3, 4);
            expect(message).to.equal("Successful change of seats in the hall." );
            let message2 = cinema.swapSeatsInHall(20, 4);
            expect(message2).to.equal("Successful change of seats in the hall." );
            let message3 = cinema.swapSeatsInHall(4, 20);
            expect(message3).to.equal("Successful change of seats in the hall." );
        });
    });
});
