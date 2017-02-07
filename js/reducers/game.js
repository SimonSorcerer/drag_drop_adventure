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
            if (action.description) {
                return {
                    ...state,
                    memory: [action.description, ...state.memory]
                }
            }
            return state
        default:
            return state
    }
}

export default gameReducers
