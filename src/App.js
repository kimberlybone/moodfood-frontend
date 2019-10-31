import React from 'react';
import logo from './logo.svg';
import './App.css';
import userActions from './redux/actions'

import LoginForm from './components/LoginForm'


class App extends React.Component {
  state = {
    loggedInUserId: localStorage.loggedInUserId,
    token: localStorage.token,
    errors: []
  }

  // setAuth = (loggedInUserId, token) => {
  // localStorage.loggedInUserId = loggedInUserId;
  // localStorage.token = token;
  // console.log(localStorage);


  // onSubmitLogin = user => {
  //   // e.preventDefault()
  //   let config = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   }
  //   fetch(URL + '/login', config)
  //   .then(res => res.json())
  //   .then(user => {
  //     if (user.errors) {
  //       this.setState({
  //         errors: user.errors
  //       })
  //     } else {
  //       this.setAuth(user.user_id, user.token)
  //     }
  //   })
  // }
  //
  // onSubmitSignup = user => {
  //   let config = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   }
  //   fetch(URL + '/users', config)
  //   .then(res => res.json())
  //   .then(user => {
  //     if (user.errors) {
  //       this.setState({
  //         errors: user.errors
  //       })
  //     } else {
  //       this.setAuth(user.user_id, user.token)
  //     }
  //   })
  // }

  // componentDidMount(){
  //   if(localStorage.token){
  //     this.props.persistUserFromAPI()
  //   }
  // }

  render(){
    const {username, password} = this.props

      return (
        <div className="App">
          <LoginForm/>
          </div>
        );
    }
  }

const mapStateToProps = state => ({user: state})

const mapDispatchToProps = {
  persistUserFromAPI: Actions.persistUserFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
