const BASE_URL = 'http://localhost:3001/'

export const fetchSlots = characterId => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SLOTS' })
    fetch(`${BASE_URL}/characters/${characterId}/slots`).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'SET_SLOTS', slots: json.data })
      })
  }
}

export const setSelectedSlot = (kind, location) => {
  return (dispatch) => {
    dispatch({ type: 'SET_SELECTED_SLOT', kind: kind, location: location })
  }
}
