import cache from '../../data/items.json';

function get(id) {
    if (cache[id]) {
        return cache[id];
    }

    throw 'Requested item does not exist in the item cache!';
}

export const getItem = get;
