import { bindActionCreators } from "redux"

const BASE_URL = 'http://localhost:3001/'

export const fetchBaseItems = characterId => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BASE_ITEMS' })
    fetch(`${BASE_URL}base_items`).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'SET_BASE_ITEMS', baseItems: json.data })
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

export const postBaseItem = baseItem => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BASE_ITEMS' })
    fetch(BASE_URL + 'base_items', optionMaker(baseItem)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_BASE_ITEM', baseItem: json.data })
      })
  }
}

export const patchBaseItem = baseItem => {
  return dispatch => {
    fetch(`${BASE_URL}base_items/${baseItem.id}`, optionMaker(baseItem, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_BASE_ITEM', baseItem: json.data })
    })
  }
}

export const showItemList = () => {
  return dispatch => {
    dispatch({ type: 'SHOW_ITEM_LIST' })
  }
}

export const hideItemList = () => {
  return dispatch => {
    dispatch({ type: 'HIDE_ITEM_LIST' })
    dispatch({ type: 'CLEAR_SELECTED_SLOT' })
  }
}

export const selectItem = item => {
  return dispatch => {
    dispatch({ type: 'SELECT_ITEM', item: item })
  }
}

export const clearSelectedItem = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_SELECTED_ITEM' })
  }
}