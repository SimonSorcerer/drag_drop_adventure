import { combineReducers } from 'redux'
import dragReducers        from './drag'
import gameReducers        from './game'
import inventoryReducers   from './inventory'

const reducers = combineReducers({
  drag: dragReducers,
  game: gameReducers,
  inventory: inventoryReducers
})

export default reducers
