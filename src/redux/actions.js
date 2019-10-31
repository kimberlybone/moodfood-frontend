// ACTION CREATORS

const setUserAction = userObj =. ({
  type: 'SET_USER',
  payload: userObj
})

const clearUserAction = () => ({
  type: 'CLEAR_USER'
})

// FETCH
const persistUserFromAPI = () => dispatch => {
  fetch('http://localhost:3000/users', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.token
    }
  })
  dispatch(setUserAction(user))
}

const loginUserToDB = userData => dispatch => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }
  fetch(URL + '/login', config)
  .then(res => res.json())
  .then(user => {
    if (user.errors) {
      this.setState({
        errors: user.errors
      })
    } else {
      this.setAuth(user.user_id, user.token)
    }
  })
}

const createNewUserToDB = userData => dispatch => {
  
}

export default(
  persistUserFromAPI,
  loginUserToDB
)
