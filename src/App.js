import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    loggedInUserId: localStorage.loggedInUserId,
    token: localStorage.token,
    errors: []
  }

  setAuth = (loggedInUserId, token) => {
  localStorage.loggedInUserId = loggedInUserId;
  localStorage.token = token;
  console.log(localStorage);


  handleChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmitLogin = user => {
    // e.preventDefault()
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

  onSubmitSignup = user => {
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    }
    fetch(URL + '/users', config)
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

  componentDidMount(){
    if(localStorage.token){
      fetch('http://localhost:3000/users', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.token
        }
      })
    }
  }

  render(){
    const {username, password} = this.state

    return (
      <div className="App">
        <form onChange={this.handleChange} onSubmit={this.handleSumbit}>
          <input type='text' name='username' value={username}></input>
          <input type='text' name='password' value={password}></input>
          </form>
        </div>
      );
  }
}

export default App;
