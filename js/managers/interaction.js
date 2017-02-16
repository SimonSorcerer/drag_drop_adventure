import { getItem }  from './item'
import interactions from '../../data/interactions.json'

export const mutateItem = ({ item: id, state }) => {
    const item = getItem(id);

    if (item && item.states[state]) {
        item.state = state;

        for (let key in item.states[state]) {
            item[key] = item.states[state][key];
        }
    }
    return item;
}

const getInteraction = (id1, id2) => {
    return interactions.find(x => x.keys.includes(id1) && x.keys.includes(id2)) || defaultInteraction;
}

const defaultInteraction = {
    text: 'You cannot use these two items :('
}

const effectors = {
    mutate: mutateItem
}

export const interact = (id1, id2) => {
    const interaction = getInteraction(id1, id2);

    for (let effect in interaction.effects) {
        let payload = interaction.effects[effect];

        effectors[effect](payload);
    }

    return interaction;
}
