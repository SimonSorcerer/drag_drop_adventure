import cache from '../../data/items.json';

function getDescription(item) {
    item.description = item.description || 'There is nothing special about the ' + item.label + '.';
    return item.description;
}

function get(id) {
    const item = cache[id];

    if (item) {
        getDescription(item);
        return item;
    }

    throw 'Requested item does not exist in the item cache!';
}

export const getItem = get;
