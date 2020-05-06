const BASE_URL = 'http://localhost:3001/'

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CHARACTERS' })
    fetch(BASE_URL + 'characters').then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'SET_CHARACTERS', characters: json.data })
      })
  }
}

export const setActiveCharacter = characterId => {
  dispatch({type:"SET_ACTIVE_CHARACTER", characterId: characterId })
}
