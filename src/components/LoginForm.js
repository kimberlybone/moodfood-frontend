import React from 'react'
import {loginUserToDB} from './redux/userActions'

export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUserToDB(this.state)
  }

  render(){
    return(
      <form onChange={this.handleChange} onSubmit={this.handleSUbmit}>
        <input
          type='text'
          name='username'
          value={null}
          placeholder='Username'/>
        <input
          type='text'
          name='password'
          value={null}
          placeholder='Password'/>
      </form>
    )
  }
}

const mapDispatchToProps = {
  loginUserToDB: Actions.loginUserToDB
};

export default connect(null, mapDispatchToProps)(LoginForm)
