import items        from '../../data/items.json';
import interactions from '../../data/interactions.json'

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

export const getInteraction = (id1, id2) => {
    const foundInteraction = interactions.find(x => x.keys.includes(id1) && x.keys.includes(id2));

    return foundInteraction || { text: 'You cannot use these two items :(' };
}
