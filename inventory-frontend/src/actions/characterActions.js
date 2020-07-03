const BASE_URL = process.env.REACT_APP_BACKEND

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
  return (dispatch) => {
    dispatch({type:"SET_ACTIVE_CHARACTER", characterId: characterId })
    dispatch({ type: "CLEAR_SELECTED_SLOT" })
  }
}

const optionMaker = (model, method = 'POST') => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(model)
  }
}

export const postCharacter = character => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CHARACTERS' })
    fetch(BASE_URL + 'characters', optionMaker(character)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_CHARACTER', character: json.data })
      })
  }
}

export const patchCharacter = character => {
  return dispatch => {
    fetch(`${BASE_URL}characters/${character.id}`, optionMaker(character, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_CHARACTER', character: json.data })
    })
  }
}

const DELETE_OPTIONS = {
  method: 'DELETE',
  headers: {
    "Accept": "application/json"
  }
}

export const deleteCharacter = character => {
  return dispatch => {
    fetch(`${BASE_URL}characters/${character.id}`, DELETE_OPTIONS).then(resp=> resp.json())
    .then(json => {
      dispatch({type: 'REMOVE_CHARACTER', characterId: json.data.id})
    })
  }
}
