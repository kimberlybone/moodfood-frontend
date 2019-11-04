import React from 'react'
import { logout } from '../redux/userActions'
import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

  render(){
    const { logout } = this.props

    return(
      <div>
        <h1> Mood & Food </h1>
        <NavLink to='/login' className='nav-btn' onClick={logout}> Logout </NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => ({ colors: state.colors, recipes: state.recipes })

const mapDispatchToProps = {
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
