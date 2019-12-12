import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'black',
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  // render(){
    const { user } = props
    const new_user = `${user.name}`
    const user_letter = new_user.slice(0, 1)
    console.log(new_user);
    return(
      <div className='profile-div'>
        <Avatar aria-label="recipe" className={classes.avatar}>
          {user_letter}
        </Avatar>
      <h2>My profile</h2>
        <p>Name: { user.name }</p>
        <p>Location: { user.location }</p>
        <p>Email: { user.email}</p>
      </div>)
  // }
}
const mapStateToProps = state => ({ user: state.user })

export default connect( mapStateToProps )( Profile );
