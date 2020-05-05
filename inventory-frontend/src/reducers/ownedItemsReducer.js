const updateModel = (modelArray, updatedModel) => {
  return modelArray.map(model => {
    if(model.id === updatedModel.id){
      return updatedModel
    }else{
      return model
    }
  })
}

export default (state = { ownedItems: [], loadingOwnedItems: true }, action) => {
  switch (action.type) {
    case 'SET_OWNED_ITEMS':
      return {
        ownedItems: action.ownedItems,
        loadingOwnedItems: false
      }
    case 'ADD_OWNED_ITEM':
      return { ...state, encounters: [...state.ownedItems, action.ownedItem], loadingOwnedItems: false }
    case 'LOADING_OWNED_ITEMS':
      return {...state, loadingOwnedItems: true }
    case 'UPDATE_OWNED_ITEM':
      return {...state, ownedItems: updateModel(state.ownedItems, action.ownedItem), loadingOwnedItems: false}
    case 'REMOVE_OWNED_ITEM':
      return {
        ...state,
        ownedItems: state.ownedItems.filter(ownedItem => ownedItem.id !== action.ownedItemId),
        loadingOwnedItems: false
      }
    default:
      return state
  }
}
