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


  render(){
    return(<div>SignupForm</div>)
  }
}
const mapStateToProps = state => ({ errors: state.errors, user: state.user })

const mapDispatchToProps = { createNewUserToDB };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))
