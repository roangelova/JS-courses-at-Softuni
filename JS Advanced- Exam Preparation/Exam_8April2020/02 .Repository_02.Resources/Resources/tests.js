let { Repository } = require("./solution.js");
let { assert, expect } = require('chai');

describe("Repository", function () {

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let clonedEntitiy = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };;

    describe("Initialization", function () {
        it("It should add props property upon init", function () {
            let repo = new Repository(properties);

            expect(repo).to.have.property('props');
            expect(repo).to.have.property('data');
            expect(repo.props).to.deep.equal(properties);
        });
        it("It should add data property upon init with no properties", function () {
            let repo = new Repository();

            expect(repo).to.have.property('data');
        });

        it("Should have property data on init", function () {
            let repo = new Repository(properties);
            expect(repo).to.have.property('data');
            expect(typeof repo.data).is.equal('object');
            expect(repo.data).instanceOf(Map);
        });
        it("Should have next id func on init", function () {
            let repo = new Repository(properties);
            expect(repo).to.have.property('nextId');
        });
    });
    describe("Get count", function () {
        it("It should return the number of stored valid entities", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity);
            repo.add(entity);
            expect(repo.count).is.equal(3);
        });
        it("It should return 0 if no added entities", function () {
            let repo = new Repository(properties);
            expect(repo.count).is.equal(0);
        });
    });
    describe("Add entity", function () {
        it("Should return incremented id of valid entity is added", function () {
            let repo = new Repository(properties);
            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(entity)).to.equal(1);
        });
        it("It should store valid entity in data map", () => {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(repo.data.get(0)).not.to.be.undefined;
            expect(repo.data.get(0)).to.have.property('name').that.equals('Pesho');
            expect(repo.data.get(0)).to.have.property('age').that.equals(22);
            expect(repo.data.get(0)).to.have.property('birthday');
        });
        it("It should throw error if prop is missing", () => {
            let entity = {
                name: "Pesho",
                age: 22,
            };
            let entity2 = {
                birthday: new Date(1998, 0, 7),
                age: 22,
            };
            let entity3 = {
                name: "Stamo",
                birthday: new Date(1998, 0, 7),
            };
            let repo = new Repository(properties);
            expect(() => repo.add(entity)).to.throw(Error, 'Property birthday is missing from the entity');
            expect(() => repo.add(entity2)).to.throw(Error, 'Property name is missing from the entity');
            expect(() => repo.add(entity3)).to.throw(Error, 'Property age is missing from the entity');
        });
        it("It should throw error if type of value is different", () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z'
            };
            let entity2 = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: 123,
                age: 22,
                birthday:  new Date(1998, 0, 7)
            };
            let repo = new Repository(properties);
            expect(() => repo.add(entity)).to.throw(Error, 'Property birthday is not of correct type');
            expect(() => repo.add(entity2)).to.throw(Error, 'Property age is not of correct type');
            expect(() => repo.add(entity3)).to.throw(Error, 'Property name is not of correct type');
        });
    });
    describe("GetId", function () {
        it("Should return entity by id", function () {
            let repo = new Repository(properties);
            let id = repo.add(entity);
            expect(repo.getId(0)).to.be.deep.equal(clonedEntitiy);
        });
        it("Should throw error when no id is found", function () {
            let repo = new Repository(properties);
            expect(() => repo.getId(0)).to.throw(Error, 'Entity with id: 0 does not exist!');
        });

    });
    describe("Update", function () {
        it("Should update one valid entity with another", function () {
            let repo = new Repository(properties);
            let newEntity = {
                name: "Gosho",
                age: 32,
                birthday: new Date(1999, 0, 7)
            };
            repo.add(entity);
            repo.update(0, newEntity);
            expect(repo.getId(0).name).to.equal('Gosho');
        });
        it("Should throw error when updating non-existent id", function () {
            let repo = new Repository(properties);
            let newEntity = {
                name: "Gosho",
                age: 32,
                birthday: new Date(1999, 0, 7)
            };
            expect(() => repo.update(2, newEntity)).to.throw(Error, 'Entity with id: 2 does not exist!');
        });
        it("It should throw error if prop is missing", () => {
            let invalidEntity = {
                name: "Pesho",
                age: 22,
            };
            let invalidEntity2 = {
                name: "Pesho",
                birthday: new Date(1999, 0, 7)
            };
            let invalidEntity3 = {
                birthday: new Date(1999, 0, 7),
                age: 22,
            };
            let repo = new Repository(properties);
            repo.add(entity);
            expect(() => repo.update(0, invalidEntity)).to.throw(Error, 'Property birthday is missing from the entity');
            expect(() => repo.update(0, invalidEntity2)).to.throw(Error, 'Property age is missing from the entity');
            expect(() => repo.update(0, invalidEntity3)).to.throw(Error, 'Property name is missing from the entity');
            
        });
        it("It should throw error if type of value is different", () => {
            let invalidEntity = {
                name: "Pesho",
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z'
            };
            let invalidEntity2 = {
                name: 123,
                age: 22,
                birthday: '1998-01-06T22:00:00.000Z'
            };
            let invalidEntity3 = {
                name: "Pesho",
                age: '22',
                birthday: '1998-01-06T22:00:00.000Z'
            };
            let repo = new Repository(properties);
            repo.add(entity);
            expect(() => repo.update(0, invalidEntity)).to.throw(Error, 'Property birthday is not of correct type');
            expect(() => repo.update(0, invalidEntity2)).to.throw(Error, 'Property name is not of correct type');
            expect(() => repo.update(0, invalidEntity3)).to.throw(Error, 'Property age is not of correct type');
        });

    });
    describe("Delete", function () {
        it("Should delete entity correctly", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity);
            repo.del(0);
            expect(repo.count).to.equal(1);
        });
        it("Should throw error when deleting on invalid id", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity);
            expect(() => repo.del(2)).to.throw(Error, 'Entity with id: 2 does not exist!');
        });
        it("It should return 0 after the only 1 entity is deleted", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.del(0);
            expect(repo.count).is.equal(0);
        });

    });
});
