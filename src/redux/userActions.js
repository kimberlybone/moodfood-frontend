
// ACTION CREATORS

const URL = 'http://localhost:3000'

const setUserAction = user => ({type: 'SET_USER', user})
const displayErrors = errors => ({type: 'ERRORS', errors})
const clearUserAction = () => ({type: 'CLEAR_USER'})


// FETCH
export const persistUserFromAPI = user => dispatch => {
  fetch(URL + `/users/${localStorage.id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  })
  .then(res => res.json())
  .then(user => dispatch(setUserAction(user)))
}


export const loginUserToDB = userData => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(userData)
  }

  fetch(URL + '/login', config)
  .then(res => res.json())
  .then(data => {
    if (!data.errors) {
      localStorage.token = data.token
      localStorage.id = data.user.id
      dispatch(setUserAction(data.user))
    } else {
      dispatch(displayErrors(data.errors))
    }
  })
}

export const createNewUserToDB = userData => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  };
  fetch(URL + '/users', config)
    .then(res => res.json())
    .then(data => {
      if(!data.errors){
        console.log('New User:', data)
        dispatch(setUserAction(data.user));
        localStorage.token = data.token;
        localStorage.id = data.user.id
      } else {
        dispatch(displayErrors(data.errors))
      }
    });
};


export const logout = () => dispatch => {
  dispatch(clearUserAction())
  localStorage.clear()
}
