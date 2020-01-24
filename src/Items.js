function filter(data, filter) {

    let countryMap = new Map();

    for (let country of data) {
        for (let people of country.people) {
            let animals = [];
            for (let animal of people.animals) {
                if (animal.name.includes(filter)) {
                    animals.push(animal);
                    people.animals = animals;
                    country.people = [people];
                    countryMap.set(country.name, country);
                }
            }
        }
    }

    let countries = [];

    countryMap.forEach(country => countries.push(country));

    return countries;

}

function count(data) {
    let countryMap = new Map();

    for (let country of data) {
        country.name = country.name + ' [' + country.people.length + ']';
        for (let people of country.people) {
            people.name = people.name + ' [' + people.animals.length + ']';
            countryMap.set(country.name, country);
        }
    }


    let countCountries = [];

    countryMap.forEach(country => countCountries.push(country));

    return countCountries;
}

module.exports = {
    filter, count
};