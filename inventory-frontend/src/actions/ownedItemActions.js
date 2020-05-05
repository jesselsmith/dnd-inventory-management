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