import { combineReducers } from 'redux'
import dragReducers        from './drag'
import gameReducers        from './game'
import inventoryReducers   from './inventory'

const reducers = combineReducers({
  dragReducers,
  gameReducers,
  inventoryReducers
})

export default reducers
