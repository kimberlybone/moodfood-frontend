import React from 'react'
import { loginUserToDB } from '../redux/userActions'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUserToDB(this.state)
  }

  render(){
    return(
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
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
        <NavLink to='/mood' />
      </form>
    )
  }
}

const mapDispatchToProps = { loginUserToDB };

export default connect(null, mapDispatchToProps)(LoginForm)
