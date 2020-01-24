let items = require('./Items');
let data = require('./data.js');

let args = require('yargs').argv;

if (args.filter != null) {
    console.log(JSON.stringify(items.filterAnimals(data.data, args.filter)));
}
if (args.count != null) {
    console.log(JSON.stringify(items.count(data.data)));
}

