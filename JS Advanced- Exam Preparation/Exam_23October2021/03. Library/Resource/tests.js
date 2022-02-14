let { library } = require("./library.js");
let { assert, expect } = require('chai');

describe("Library", function () {
    describe("calcPriceOfBook…", function () {
        it("It should throw an exception if input is invalid", () => {
            expect(() => library.calcPriceOfBook(23, 1980)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('It', '1980')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('It', {})).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('It', [])).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook([], 1980)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook({}, 1980)).to.throw(Error, 'Invalid input');
        });
        it("It should return the standard price when no price discount is offered", () => {
            let result = library.calcPriceOfBook('It', 1999);
            expect(result).to.equal('Price of It is 20.00');
        });
        it("It should return a discounted price when year <=1980", () => {
            let result = library.calcPriceOfBook('It', 1980);
            expect(result).to.equal('Price of It is 10.00');
            let result2 = library.calcPriceOfBook('It', 1914);
            expect(result2).to.equal('Price of It is 10.00');

        });

    });
    describe("findBook", function () {
        it("It should throw an exception if booksArr is empty", () => {
            expect(() => library.findBook([], 'Zoro')).to.throw(Error, 'No books currently available');
        });
        it("It should find the book when it's presaent in the array", () => {
           let result =  library.findBook(['Zoro', 'It'], 'Zoro');
           expect(result).to.equal('We found the book you want.')
        });
        it("It should NOT find the book when it's NOT presaent in the array", () => {
            let result =  library.findBook(['Zoro', 'It'], 'Taralej');
            expect(result).to.equal("The book you are looking for is not here!");
         });
    });
    describe("arrangeTheBooks", function () {
        it("It should throw an exception if count is invalid", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks('-1')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw(Error, 'Invalid input');
        });
        it("It should return a message about insufficient space if count is bigger than actual space", () => {
            let result =  library.arrangeTheBooks(41);
            expect(result).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        it("It should arrange the books if actual space is smaller than count of books to arrange", () => {
            let result =  library.arrangeTheBooks(10);
            expect(result).to.equal("Great job, the books are arranged.");
            let result2 =  library.arrangeTheBooks(40);
            expect(result2).to.equal("Great job, the books are arranged.");
        });
        
    });
});