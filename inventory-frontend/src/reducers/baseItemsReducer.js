const updateModel = (modelArray, updatedModel) => {
  return modelArray.map(model => {
    if(model.id === updatedModel.id){
      return updatedModel
    }else{
      return model
    }
  })
}

export default (state = { baseItems: [], loadingBaseItems: true, showItemList: false }, action) => {
  switch (action.type) {
    case 'SET_BASE_ITEMS':
      return {
        baseItems: action.baseItems,
        loadingBaseItems: false
      }
    case 'ADD_BASE_ITEM':
      return { ...state, encounters: [...state.baseItems, action.baseItem], loadingBaseItems: false }
    case 'LOADING_BASE_ITEMS':
      return {...state, loadingBaseItems: true }
    case 'UPDATE_BASE_ITEM':
      return {...state, baseItems: updateModel(state.baseItems, action.baseItem), loadingBaseItems: false}
    case 'REMOVE_BASE_ITEM':
      return {
        ...state,
        baseItems: state.baseItems.filter(baseItem => baseItem.id !== action.baseItemId),
        loadingBaseItems: false
      }
    case 'SHOW_ITEM_LIST':
      return { ...state, showItemList: true }
    case 'HIDE_ITEM_LIST':
      return { ...state, showItemList: false } 
    default:
      return state
  }
}
