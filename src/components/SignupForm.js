import React from 'react'
import '../Assets/AccountInfo.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createNewUserToDB } from './redux/userActions'

class SignupForm extends React.Component {

  state = {
    name: '',
    password: '',
    location: '',
    email: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    const { createNewUserToDB } = this.props
    e.preventDefault()
    createNewUserToDB(this.state)
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

    const { name, password, location, email } = this.state

    return(
      <div>
        <form onChange={ this.handleChange } onSubmit={ this.handleSubmit } className='login-form'>
          { this.displayErrors() }
          <p className='form-input'>
            Username: <br></br> <input
            type='text'
            name='name'
            className='form-input'
            value={ name }
            placeholder='Username'/></p>
          <p className='form-input'>
            Email: <br></br> <input
            type='text'
            name='name'
            className='form-input'
            value={ email }
            placeholder='Username'/></p>
          <p className='form-input'>
            Location: <br></br> <input
            type='text'
            name='name'
            className='form-input'
            value={ location }
            placeholder='Username'/></p>
          <p className='form-input'>
            Password: <br></br><input
            type='password'
            name='password'
            className='form-input'
            value={ password }
            placeholder='Password'/></p>
          <input className='form-btn' type='submit'></input>
        </form>
      </div>)
  }
}
const mapStateToProps = state => ({ errors: state.errors, user: state.user })

const mapDispatchToProps = { createNewUserToDB };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))
