const BASE_URL = 'http://localhost:3001/'

export const fetchContainers = characterId => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONTAINERS' })
    fetch(`${BASE_URL}characters/${characterId}/containers`).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'SET_CONTAINERS', containers: json.data })
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

export const postContainer = container => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONTAINERS' })
    debugger
    fetch(BASE_URL + 'containers', optionMaker(container)).then(resp => resp.json())
      .then(json => {
        debugger
        dispatch({ type: 'ADD_CONTAINER', container: json.data })
      })
  }
}

export const patchContainer = container => {
  return dispatch => {
    fetch(`${BASE_URL}containers/${container.id}`, optionMaker(container, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_CONTAINER', container: json.data })
    })
  }
}

const DELETE_OPTIONS = {
  method: 'DELETE',
  headers: {
    "Accept": "application/json"
  }
}

export const deleteContainer = container => {
  return dispatch => {
    fetch(`${BASE_URL}containers/${container.id}`, DELETE_OPTIONS).then(resp=> resp.json())
    .then(json => {
      dispatch({type: 'REMOVE_CONTAINER', containerId: json.data.id})
    })
  }
}
