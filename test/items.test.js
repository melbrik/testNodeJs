let items = require('../src/Items');


describe('Items', function () {

    it('shouldMatchFilterByAnimalsWithParameter', function () {
        // Arrange
        let data = require('./testFile/filterByAnimals.js');

        // Act & Assert
        expect(items.filter(data.filterByAnimals, 'ry').length).toEqual(data.filterByAnimals.length);
        expect(items.filter(data.filterByAnimals, 'ry')).toEqual(data.filterByAnimals);
    });

    it('shouldNotMatchFilterByAnimalsWithParameter', function () {
        // Arrange
        let data = require('./testFile/filterByAnimals.js');

        // Act & Assert
        expect(items.filter(data.filterByAnimals, 'animal not filtered').length).toEqual(0);
    });

    it('shouldCountAnimalsPerPeoplePerCountry', function () {
        // Arrange
        let count = require('./testFile/countAnimalPerPeoplePerCountry.js');

        // Act & Assert
        expect(items.count(count.countAnimalPerPeoplePerCountry)).toEqual(count.countAnimalPerPeoplePerCountry);
    });
});