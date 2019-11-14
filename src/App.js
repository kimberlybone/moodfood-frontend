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
import RecipeShowPage from './components/RecipeShowPage'

import { Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount(){
    if(localStorage.token){
      this.props.persistUserFromAPI()
    }
  }

  // handleLogin = () => {
  //     return <Redirect to='/mood' />
  // }

  // handleSignup = () => {
  //   if( localStorage.token ){
  //     return <Redirect to='/mood' />
  //   } else {
  //     return <SignupForm />
  //   }
  // }

  // if recipes.message === 'Please Log In' redirect to <NotFound/>

  showNavBar = () => {
      return <NavBar/>
  }

render(){

    const stylesObj = {
      backgroundImage: `url(${localStorage.color})`
    };

    return (
        <div className="App" style={ stylesObj }>
          <div className='App-div'>

          { localStorage.token && this.props.location.pathname !== '/mood' ?
            this.showNavBar()
            :
            null
          }
          <div className='route-div'>
            <ReactNotifications/>
            <Route exact
              path='/recipes/:id'
              render={(renderProps) => <RecipeShowPage info={renderProps}/>}/>
            <Route exact
              path='/signup'
              render={ () => <SignupForm/> } />
            <Route exact
              path='/profile'
              render={ () => <Profile/> }/>
            <Route exact
              path='/home'
              render={ () => <HomeContainer/> }/>
            <Route exact
              path='/login'
              render={ () => <LoginForm/> } />
            <Route exact
              path='/mood'
              render={ () => <MoodContainer/> } />
            <Route exact
              path='/slideshow/:slug'
              render={ () => <Slideshow /> } />
          </div>
          </div>
        </div>
      );
    }
  }

const mapStateToProps = state => {
  return { user: state.user, colors: state.colors }
}

const mapDispatchToProps = { persistUserFromAPI }

export default connect(mapStateToProps, mapDispatchToProps)(App);
