import React from 'react';
import './App.css';
import { persistUserFromAPI } from './redux/userActions'
import { connect } from 'react-redux'

import MoodContainer from './containers/MoodContainer'
import LoginForm from './components/LoginForm'
import Slideshow from './components/Slideshow'
import { Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount(){
    if(localStorage.token){
      this.props.persistUserFromAPI()
    }
  }

  render(){

    const stylesObj = {
      background: this.props.colors
    };
    return (
        <div className="App" style={ stylesObj }>
          <p>Mood & Food </p>
          <Route exact
            path='/login'
            render={ (props) =>
                < LoginForm />}
                />
          <Route exact
            path='/mood'
            render={() =>
              <MoodContainer/>
            } />
          <Route exact
            path='/slideshow'
            render={() =>
              <Slideshow/>
            } />
        </div>
      );
    }
  }

const mapStateToProps = state => ({ user: state, colors: state.colors })

const mapDispatchToProps = {
  persistUserFromAPI: persistUserFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
