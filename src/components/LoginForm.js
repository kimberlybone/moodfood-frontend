import React from 'react'
import { loginUserToDB } from '../redux/userActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import '../Assets/AccountInfo.css'

class LoginForm extends React.Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    const { loginUserToDB } = this.props
    e.preventDefault()
    loginUserToDB(this.state)
  }
  // componentDidUpdate(prevProps, prevState) {
  //   const { user, history } = this.props
  //   if(user.name){
  //     history.push('/mood')
  //   }
  // }

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
          {this.displayErrors()}
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
          <input className='form-btn' type='submit'></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({ errors: state.errors, user: state.user })

const mapDispatchToProps = { loginUserToDB };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
