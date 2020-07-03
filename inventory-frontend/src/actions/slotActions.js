const BASE_URL = process.env.REACT_APP_BACKEND

export const fetchSlots = characterId => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SLOTS' })
    fetch(`${BASE_URL}characters/${characterId}/slots`).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'SET_SLOTS', slots: json.data })
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

export const setSelectedSlot = (kind, location) => {
  return (dispatch) => {
    dispatch({ type: 'SET_SELECTED_SLOT', kind: kind, location: location })
  }
}

export const postSlot = slot => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SLOTS' })
    fetch(BASE_URL + 'slots', optionMaker(slot)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_OWNED_ITEM', ownedItem: json.included[0] })
        dispatch({ type: 'ADD_SLOT', slot: json.data })
      })
  }
}

export const patchSlot = slot => {
  return dispatch => {
    fetch(`${BASE_URL}slots/${slot.id}`, optionMaker(slot, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_SLOT', slot: json.data })
    })
  }
}

const DELETE_OPTIONS = {
  method: 'DELETE',
  headers: {
    "Accept": "application/json"
  }
}

export const deleteSlot = slot => {
  return dispatch => {
    fetch(`${BASE_URL}slots/${slot.id}`, DELETE_OPTIONS).then(resp=> resp.json())
    .then(json => {
      dispatch({type: 'REMOVE_SLOT', slotId: json.data.id})
    })
  }
}
