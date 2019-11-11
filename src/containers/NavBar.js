import React from 'react'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import CenteredTabs from '../components/CenteredTabs'





const NavBar = (props) => {

    return(
      <div>
        <h1> Mood & Food </h1>
        <CenteredTabs/>
      </div>
    )
}

export default NavBar;
