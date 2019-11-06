import React from 'react';
import './App.css';
import { persistUserFromAPI } from './redux/userActions'
import { connect } from 'react-redux'
import ReactNotifications from 'react-notifications-component';

import HomeContainer from './containers/HomeContainer'
import MoodContainer from './containers/MoodContainer'
import LoginForm from './components/LoginForm'
import Slideshow from './components/Slideshow'
import NavBar from './containers/NavBar'
import Profile from './components/Profile'
import SignupForm from './components/SignupForm'

import { Route, Redirect } from 'react-router-dom'


class App extends React.Component {

  componentDidMount(){
    if(localStorage.token){
      this.props.persistUserFromAPI()
    }
  }

  handleLogin = () => {
    if( localStorage.token ){
      return <Redirect to='/mood' />
    } else {
      return <LoginForm />
    }
  }

  handleSignup = () => {
    if( localStorage.token ){
      return <Redirect to='/mood' />
    } else {
      return <SignupForm />
    }
  }

  showNavBar = () => {
    const { user } = this.props
    if( user.name ){
      return <NavBar/>
    } else {
      return <LoginForm />
    }
  }

render(){

    const stylesObj = {
      background: this.props.colors
    };

    return (
        <div className="App" style={ stylesObj }>
          { this.showNavBar() }
          <ReactNotifications/>
          <Route exact
                 path='/signup'
                 render={ this.handleSignup } />
          <Route exact
                 path='/profile'
                 render={ () => <Profile/> }/>
          <Route exact
                 path='/home'
                 render={ () => <HomeContainer/> }/>
          <Route exact
                  path='/login'
                  render={ this.handleLogin } />
          <Route exact
                  path='/mood'
                  render={ () => <MoodContainer/> } />
          <Route exact
                 path='/slideshow'
                 render={ () => <Slideshow/> } />
        </div>
      );
    }
  }

const mapStateToProps = state => ({ user: state.user, colors: state.colors })

const mapDispatchToProps = { persistUserFromAPI }

export default connect(mapStateToProps, mapDispatchToProps)(App);
