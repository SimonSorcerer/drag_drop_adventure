const defaultState = {
    memory: []
}

const gameReducers = (state = {}, action) => {
    state = state || defaultState;

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
        case 'EXAMINE':
            return {
                ...state,
                memory: [item.description, ...state.memory]
            }
        default:
            return state
    }
}

export default gameReducers
