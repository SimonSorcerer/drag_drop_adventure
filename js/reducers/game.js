const defaultState = {
    memory: []
}

const gameReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_HOVER':
            return {
                ...state,
                console: action.id
            }
        case 'STOP_HOVER':
            return {
                ...state,
                console: null
            }
        case 'EXAMINE':
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
