import { lookAt } from '../helpers/transcription'

export default (state, action) => {
    const subState = state.game;

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
            const newRecord = {
                prefix: lookAt(action.label),
                description: action.description
            }

            return {
                ...subState,
                memory: [newRecord, ...subState.memory]
            }
            return subState
        default:
            return subState
    }
}
