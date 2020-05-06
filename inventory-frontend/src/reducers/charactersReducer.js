const updateModel = (modelArray, updatedModel) => {
  return modelArray.map(model => {
    if(model.id === updatedModel.id){
      return updatedModel
    }else{
      return model
    }
  })
}

export default (state = { characters: [], activeCharacter: null, loadingCharacters: true }, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        characters: action.characters,
        loadingCharacters: false
      }
    case 'ADD_CHARACTER':
      return { ...state, encounters: [...state.characters, action.character], loadingCharacters: false }
    case 'LOADING_CHARACTERS':
      return {...state, loadingCharacters: true }
    case 'UPDATE_CHARACTER':
      return {...state, characters: updateModel(state.characters, action.character), loadingCharacters: false}
    case 'REMOVE_CHARACTER':
      return {
        ...state,
        characters: state.characters.filter(character => character.id !== action.characterId),
        loadingCharacters: false
      }
    case 'SET_ACTIVE_CHARACTER':
      return{ ...state, activeCharacter: action.characterId }
    default:
      return state
  }
}
