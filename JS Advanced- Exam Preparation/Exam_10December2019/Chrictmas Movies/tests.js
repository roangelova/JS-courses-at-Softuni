let { assert, expect } = require('chai');
const ChristmasMovies = require("./Christmas_Movies.js");

describe("Christmas movies", function () {
    describe("Instantiation", function () {
        it("It should create an instance and add the properties", function () {
            let movies = new ChristmasMovies();
            expect(movies).to.have.property('movieCollection').that.deep.equals([]);
            expect(movies).to.have.property('watched').that.deep.equals({});
            expect(movies).to.have.property('actors').that.deep.equals([]);
        });
    });
    describe("buyMovie", function () {
        it("It should add the movie if not present in the movieCollections", function () {
            let movies = new ChristmasMovies;
            let resultString = movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            expect(resultString).to.equal(`You just got Home Alone to your collection in which Macaulay Culkin are taking part!`);
        });
        it("It should NOT add the movie and throw an error if already present in the movieCollections", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            expect(() => movies.buyMovie('Home Alone', ['Macaulay Culkin'])).to.throw(Error, `You already own Home Alone in your collection!`);
        });
        it("It should only add the unique actors to the collection", function () {
            let movies = new ChristmasMovies;
            let resultString = movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin']);
            expect(resultString).to.equal(`You just got Home Alone to your collection in which Macaulay Culkin are taking part!`);
        });
    });
    describe("discardMovie", function () {
        it("It should throw an error if movie is not present in MovieCollection", function () {
            let movies = new ChristmasMovies;
            expect(() => movies.discardMovie('Home Alone')).to.throw(Error, `Home Alone is not at your collection!`);
        });
        it("It should not delete a movie if it wasnt watched yet", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            expect(() => movies.discardMovie('Home Alone')).to.throw(Error,`Home Alone is not watched!`);
        });
        it("It should delete a movie if it was watched already", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            movies.watchMovie('Home Alone');
            let result = movies.discardMovie('Home Alone');
            expect(result).to.equal(`You just threw away Home Alone!`);
        });
    });
    describe("watchMovie", function () {
        it("It should throw an error if movie is not present in MovieCollection", function () {
            let movies = new ChristmasMovies;
            expect(() => movies.watchMovie('Home Alone 2')).to.throw(Error, `No such movie in your collection!`);
        });
        it("It should increase counter if movie is present in the collection", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            movies.watchMovie('Home Alone');
            expect(movies.watched['Home Alone']).to.equal(1);
            movies.watchMovie('Home Alone');
            expect(movies.watched['Home Alone']).to.equal(2);
        });
    });
    describe("favouriteMovie", function () {
        it("It should throw an error if movie is not present in MovieCollection", function () {
            let movies = new ChristmasMovies;
            expect(() => movies.favouriteMovie()).to.throw(Error,'You have not watched a movie yet this year!');
        });
        it("It should return the favorite movie", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            let result = movies.favouriteMovie();
            expect(result).to.equal( `Your favourite movie is Home Alone and you have watched it 2 times!`);
        });
        it("It should sort correctly and return the favourite movie", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            movies.watchMovie('Home Alone 2');
            let result = movies.favouriteMovie();
            expect(result).to.equal( `Your favourite movie is Home Alone and you have watched it 2 times!`);
        });
    });
    describe("mostStarredActors", function () {
        it("It should throw an error if movie is not present in MovieCollection", function () {
            let movies = new ChristmasMovies;
            expect(() => movies.mostStarredActor()).to.throw(Error,'You have not watched a movie yet this year!');
        });
        it("It should return the most starred actor after successful sorting", function () {
            let movies = new ChristmasMovies;
            movies.buyMovie('Home Alone', ['Macaulay Culkin']);
            movies.buyMovie('Love,Rosie', ['Lilly Collins']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            let result = movies.mostStarredActor();
            expect(result).to.equal(`The most starred actor is Macaulay Culkin and starred in 2 movies!`);
        });
    });
});
