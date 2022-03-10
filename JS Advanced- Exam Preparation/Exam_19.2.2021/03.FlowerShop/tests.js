describe("Flower Shop", function () {
    describe("calcPriceOfFlowers", function () {
        it("should throw an Error if input is not valid", function () {
            expect(() => flowerShop.calcPriceOfFlowers('rose', NaN, 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, NaN)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers(6, 2, 2)).to.throw(Error, "Invalid input!");
        });
        it("should return the correct price", function () {
            let price = flowerShop.calcPriceOfFlowers('rose', 2, 2);
            expect(price).to.equal(`You need $4.00 to buy rose!`);
        });
    });
    describe("checkFlowersAvailable", function () {
        it("should return correct message if the flower is not available", function () {
            let result = flowerShop.checkFlowersAvailable('rose', ['someFlower']);
            expect(result).to.equal(`The rose are sold! You need to purchase more!`);
        });
        it("should return correct message if the flowersArray is empty", function () {
            let result = flowerShop.checkFlowersAvailable('rose', []);
            expect(result).to.equal(`The rose are sold! You need to purchase more!`);
        });
        it("should return correct message if the flower is available", function () {
            let result = flowerShop.checkFlowersAvailable('rose', ['rose', 'Lily']);
            expect(result).to.equal(`The rose are available!`);
        });
    });
    describe("sellFlowers", function () {
        it("should throw an error is input is invalid", function () {
            expect(() => flowerShop.sellFlowers('notArray', 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(['rose'], NaN)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(['rose'], -1)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(['rose'], 2)).to.throw(Error, "Invalid input!");
        });
        it("should not add elements if space is 0", function () {
            let result = flowerShop.sellFlowers(['rose'], 0);
            expect(result).to.equal('')
        });
        it("should not add more elements than the available space", function () {
            let result = flowerShop.sellFlowers(['rose', 'orchid'], 1);
            expect(result).to.equal('rose')
        });
    });

});
