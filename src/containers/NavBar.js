import React from 'react'
import { logout } from '../redux/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



class NavBar extends React.Component {

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  //   return (
  //     <Paper className={classes.root}>
  //       <Tabs
  //         value={value}
  //         onChange={handleChange}
  //         indicatorColor="primary"
  //         textColor="primary"
  //         centered
  //         >
  //         <Tab label="Item One" />
  //         <Tab label="Item Two" />
  //         <Tab label="Item Three" />
  //       </Tabs>
  //     </Paper>
  //   );
  // }
  goHome = () => {
    const { history } = this.props
    history.push('/home')
  }

  render(){
    const { logout } = this.props

    return(
      <div>
        <h1> Mood & Food </h1>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
        <p>
          <NavLink to='/profile'> Profile </NavLink >
          <NavLink to='/slideshow/:slug' className='nav-btn'> | My Slideshow </NavLink>
          <NavLink to='/home' className='nav-btn' onClick={this.goHome}> | Home |</NavLink>
          <NavLink to='/login' className='nav-btn' onClick={logout}>  Logout | </NavLink>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = { logout }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
