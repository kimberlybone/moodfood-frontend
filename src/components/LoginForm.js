import React from 'react'
import { loginUserToDB } from '../redux/userActions'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import '../Assets/AccountInfo.css'

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
    history.push('/mood')
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
      <div className='login-page'>
        <form onChange={ this.handleChange } onSubmit={ this.handleSubmit } className='login-form'>
          <h2>Log In</h2>
          <p>New user? <NavLink to='/signup'>Sign Up Here</NavLink></p>
          { this.displayErrors() }
          <p className='form-input'>
            Username: <br></br> <input
            type='text'
            name='name'
            className='form-input'
            value={ name }
            placeholder='Username'/></p>
          <p className='form-input'>
            Password: <br></br><input
            type='password'
            name='password'
            className='form-input'
            value={ password }
            placeholder='Password'/></p>
          <input className='form-btn' type='submit' value='Login'></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({ errors: state.errors, user: state.user })

const mapDispatchToProps = { loginUserToDB };

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( LoginForm ))
