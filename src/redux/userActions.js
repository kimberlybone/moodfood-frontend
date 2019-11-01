import { push } from 'react-router-redux'
// ACTION CREATORS 

const URL = 'http://localhost:3000'

const setUserLogin = user => ({type: 'SET_USER', user})
const displayErrors = errors => ({type: 'ERRORS', errors})
const clearUserAction = () => ({type: 'CLEAR_USER'})

// FETCH
export const persistUserFromAPI = user => dispatch => {
  fetch(URL + `/users/${localStorage.id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.token
    }
  })
  .then(res => res.json())
  .then(user => dispatch(setUserLogin(user)))
}



export const loginUserToDB = userData => dispatch => {

  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  }

  fetch(URL + '/login', config)
  .then(res => res.json())
  .then(data => {
    if (!data.errors) {
      localStorage.token = data.token
      localStorage.id = data.user.id
      dispatch(setUserLogin(data.user))
    } else {
      dispatch(displayErrors(data.errors))
    }
  })
}

// const createNewUserToDB = userData => dispatch => {
//
// }
