import React from 'react'
import { logout } from '../redux/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

  goHome = () => {
    const { history } = this.props
    history.push('/home')
  }

  render(){
    const { logout } = this.props

    return(
      <div>
        <h1> Mood & Food </h1>
        <NavLink to='/profile'> Profile </NavLink >
        <NavLink to='/slideshow' className='nav-btn'> | My Slideshow </NavLink>
        <NavLink to='/home' className='nav-btn' onClick={this.goHome}> | Home |</NavLink>
        <NavLink to='/login' className='nav-btn' onClick={logout}>  Logout | </NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = {
  logout: logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
