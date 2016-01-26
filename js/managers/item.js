var cache = require('../../data/items.json');

function get(id) {
    if (cache[id]) {
        return cache[id];
    }
    
    throw 'Requested item does not exist in the item cache!';
}

module.exports = {
    get: get
};