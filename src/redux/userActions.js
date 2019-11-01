// ACTION CREATORS
const URL = 'http://localhost:3000'

const setUserLogin = userData => ({
  type: 'SET_USER',
  userData
})

// const clearUserAction = () => ({
//   type: 'CLEAR_USER'
// })

// FETCH
export const persistUserFromAPI = user => dispatch => {
  fetch(URL + '/users', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.token
    }
  })
  // console.log(localStorage.token)
  dispatch(setUserLogin(user))
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
    localStorage.token = data.token
    dispatch(setUserLogin(data.user))
  }
    // if (user.errors) {
    //   this.setState({
    //     errors: user.errors
    //   })
    // } else {
    //   this.setAuth(user.user_id, user.token)
    // }
  )
}

// const createNewUserToDB = userData => dispatch => {
//
// }

// export {
//   persistUserFromAPI,
//   loginUserToDB
// }
