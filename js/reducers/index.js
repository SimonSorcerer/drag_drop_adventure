//import { combineReducers } from 'redux'
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
        for (let subReducers of reducers) {
            state = subReducers(state, action)
        }
        return state
    }
}

const reducers = combineReducers([
  dragReducers,
  gameReducers,
  inventoryReducers
])

export default reducers
