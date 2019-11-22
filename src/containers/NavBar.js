import React from 'react'
import { NavLink } from 'react-router-dom'
import CenteredTabs from '../style-components/CenteredTabs'
import '../Assets/NavBar.css'


const NavBar = (props) => {

    return(
      <div>
        <h1 className='header-h1'> MoodFood </h1>
        <CenteredTabs/>
      </div>
    )
}

export default NavBar;
