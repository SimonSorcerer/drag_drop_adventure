import items from '../../data/items.json'

const getDescription = (item) => {
    item.description = item.description || 'There is nothing special about the ' + item.label + '.';
    return item.description;
}

export const getItem = (id) => {
    const item = items[id];

    if (item) {
        getDescription(item);
        return {
            id,
            ...item
        };
    }

    throw 'Requested item does not exist in the item cache!';
}
