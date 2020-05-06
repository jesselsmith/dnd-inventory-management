const BASE_URL = 'http://localhost:3001/'

export const fetchOwnedItems = characterId => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_OWNED_ITEMS' })
    fetch(`${BASE_URL}/characters/${characterId}/owned_items`).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'SET_OWNED_ITEMS', ownedItems: json.data })
      })
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

export const postOwnedItem = ownedItem => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_OWNED_ITEMS' })
    fetch(BASE_URL + 'owned_items', optionMaker(ownedItem)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_OWNED_ITEM', ownedItem: json.data })
      })
  }
}

export const patchOwnedItem = ownedItem => {
  return dispatch => {
    fetch(`${BASE_URL}owned_items/${ownedItem.id}`, optionMaker(ownedItem, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_OWNED_ITEM', ownedItem: json.data })
    })
  }
}