import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {

  render(){
    const { user } = this.props
    return(
      <div>
      <h2>My profile</h2>
        <p>Name: { user.name }</p>
        <p>Location: { user.location }</p>
        <p>Email: { user.email}</p>
      </div>)
  }
}
const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Profile);
