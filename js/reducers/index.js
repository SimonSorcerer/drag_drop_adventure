import dragReducers        from './drag'
import gameReducers        from './game'
import inventoryReducers   from './inventory'

const defaultState = {
    game: {
        memory: [],
        hoveredItem: null
    },
    drag: {
        draggedItem: null,
        draggedOverItem: null
    },
    inventory: {
        items: new Set(['passport']),
        isDraggedOver: false
    }
}

const combineReducers = (reducers) => {
    return (state = defaultState, action) => {
        for (let key in reducers) {
            state[key] = reducers[key](state, action)
        }
        return {...state}
    }
}

const reducers = combineReducers({
  drag: dragReducers,
  game: gameReducers,
  inventory: inventoryReducers
})

export default reducers
