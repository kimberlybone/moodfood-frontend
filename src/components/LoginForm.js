import React from 'react'
import { loginUserToDB } from '../redux/userActions'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    const { loginUserToDB, history } = this.props
    e.preventDefault()
    loginUserToDB(this.state)
    if(localStorage.length){
      history.push('/mood')
    }

  }

  displayErrors = () => {
    const { errors } = this.props
    if(errors){
      return errors.map(error => {
        return <li key={error}>{error}</li>
      })
    } else {
      return null
    }
  }

  render(){
    const { name, password } = this.state
    return(
      <form onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
        {this.displayErrors()}
        <p>Username: <input
          type='text'
          name='name'
          value={ name }
          placeholder='Username'/></p>
        <p>Password: <input
          type='password'
          name='password'
          value={ password }
          placeholder='Password'/></p>
        <input type='submit'></input>
      </form>
    )
  }
}

const mapStateToProps = state => ({ errors: state.errors })

const mapDispatchToProps = { loginUserToDB };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
