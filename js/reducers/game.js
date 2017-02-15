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
            const item1 = getItem(state.drag.draggedItem);
            const item2 = getItem(state.drag.draggedOverItem);
            const interaction = getInteraction(item1.id, item2.id);

            newRecord = {
                prefix: useWith(item1.label, item2.label),
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
