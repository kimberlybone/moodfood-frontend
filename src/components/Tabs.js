import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/userActions'


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  const CenteredTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    // console.log(props);

    const goHome = () => {
      const { history } = props
      history.push('/home')
    }
    const goToProfile = () => {
      const { history } = props
      history.push('/profile')
    }
    const goToSlideshow = () => {
      const { history } = props
      history.push('/slideshow/:slug')
    }

    const goToLoginPage = () => {
      const { history, logout } = props
      // console.log(logout);
      logout()
      history.push('/login')
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Paper className={classes.root}>
        <p><Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          >
          <Tab onClick={goToProfile} label="Profile" />
          <Tab onClick={goToSlideshow} label="My Slideshow" />
          <Tab onClick={goHome} label="Home" />
          <Tab onClick={goToLoginPage} label="Logout" />
        </Tabs></p>
      </Paper>
    );
  }

  const mapDispatchToProps = { logout }
  export default withRouter(connect(null, mapDispatchToProps)(CenteredTabs))
