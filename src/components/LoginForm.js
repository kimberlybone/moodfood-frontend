import React from 'react'
import {loginUserToDB} from '../redux/userActions'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUserToDB(this.state)
    if(localStorage.length){
      this.props.history.push('/mood')
    }

  }

  displayErrors = () => {
    if(this.props.errors){
      return this.props.errors.map(error => {
        return <li key={error}>{error}</li>
      })
    } else {
      return null
    }
  }

  render(){
    console.log(this.props.errors)
    return(
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        {this.displayErrors()}
        <p>Username: <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Username'/></p>
        <p>Password: <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'/></p>
        <input type='submit'></input>
      </form>
    )
  }
}

const mapStateToProps = state => ({errors: state.errors})

const mapDispatchToProps = { loginUserToDB };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
