import { combineReducers } from 'redux';
import slots from './slotsReducer'
import ownedItems from './ownedItemsReducer'
import characters from './charactersReducer'
import baseItems from './baseItemsReducer'
import containers from './containersReducer'

export default combineReducers({
  slots,
  ownedItems,
  characters,
  baseItems,
  containers
})