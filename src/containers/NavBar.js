import React from 'react'
import { NavLink } from 'react-router-dom'
import CenteredTabs from '../style-components/CenteredTabs'


const NavBar = (props) => {

    return(
      <div>
        <h1> Mood & Food </h1>
        <CenteredTabs/>
      </div>
    )
}

export default NavBar;
