const updateModel = (modelArray, updatedModel) => {
  return modelArray.map(model => {
    if(model.id === updatedModel.id){
      return updatedModel
    }else{
      return model
    }
  })
}

export default (state = { slots: [], loadingSlots: true, selectedSlot: {} }, action) => {
  switch (action.type) {
    case 'SET_SLOTS':
      return {
        slots: action.slots,
        loadingSlots: false
      }
    case 'ADD_SLOT':
      return { ...state, encounters: [...state.slots, action.slot], loadingSlots: false }
    case 'LOADING_SLOTS':
      return {...state, loadingSlots: true }
    case 'UPDATE_SLOT':
      return {...state, slots: updateModel(state.slots, action.slot), loadingSlots: false}
    case 'REMOVE_SLOT':
      return {
        ...state,
        slots: state.slots.filter(slot => slot.id !== action.slotId),
        loadingSlots: false
      }
    case 'SET_SELECTED_SLOT':
      return {
        ...state,
        selectedSlot: { kind: action.kind, location: action.location }
      }
    case 'CLEAR_SELECTED_SLOT':
      return {
        ...state,
        selectedSlot: {}
      }
    default:
      return state
  }
}
