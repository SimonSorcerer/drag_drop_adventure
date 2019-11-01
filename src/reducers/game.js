import { lookAt, useWith }         from '../helpers/transcription'
import { getItem, getInteraction } from '../managers/item'

export default (state, action) => {
    const subState = state.game;
    let newRecord;

    switch (action.type) {
        case 'START_HOVER':
            return {
                ...subState,
                hoveredItem: action.id
            }
        case 'STOP_HOVER':
            return {
                ...subState,
                hoveredItem: null
            }
        case 'EXAMINE_ITEM':
            newRecord = {
                prefix: lookAt(action.label),
                description: action.description
            }

            return {
                ...subState,
                memory: [newRecord, ...subState.memory]
            }
            return subState
        case 'DROP_ITEM':
            const itemA = getItem(state.drag.draggedItem);
            const itemB = getItem(state.drag.draggedOverItem);
            const interaction = getInteraction(itemA.id, itemB.id);

            newRecord = {
                prefix: interaction.prefix || useWith(itemA.label, itemB.label),
                description: interaction.text
            }

            return {
                ...subState,
                memory: [newRecord, ...subState.memory]
            }
        default:
            return subState
    }
}
