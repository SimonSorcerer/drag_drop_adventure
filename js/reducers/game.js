import { lookAt } from '../helpers/transcription'

const defaultState = {
    memory: [],
    hoveredItem: null
}

const gameReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_HOVER':
            return {
                ...state,
                hoveredItem: action.id
            }
        case 'STOP_HOVER':
            return {
                ...state,
                hoveredItem: null
            }
        case 'EXAMINE_ITEM':
            const newRecord = {
                prefix: lookAt(action.label),
                description: action.description
            }

            return {
                ...state,
                memory: [newRecord, ...state.memory]
            }
            return state
        default:
            return state
    }
}

export default gameReducers
