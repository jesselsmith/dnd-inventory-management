const updateModel = (modelArray, updatedModel) => {
  return modelArray.map(model => {
    if(model.id === updatedModel.id){
      return updatedModel
    }else{
      return model
    }
  })
}

export default (state = { containers: [], loadingContainers: true }, action) => {
  switch (action.type) {
    case 'SET_CONTAINERS':
      return {
        containers: action.containers,
        loadingcontainers: false
      }
    case 'ADD_CONTAINER':
      return { ...state, containers: [...state.containers, action.container], loadingContainers: false }
    case 'LOADING_CONTAINERS':
      return {...state, loadingcontainers: true }
    case 'UPDATE_CONTAINER':
      return {...state, containers: updateModel(state.containers, action.container), loadingContainers: false}
    case 'REMOVE_CONTAINER':
      return {
        ...state,
        containers: state.containers.filter(container => container.id !== action.containerId),
        loadingContainers: false
      }
    default:
      return state
  }
}
